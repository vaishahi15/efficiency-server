import { sequelize } from "./database.util";
import { Op, QueryTypes } from "sequelize";
import { Employee, JobCardDetails, Model, Organization, PrinterPool, TriggerEventLog } from "@sql-models";

export const initTriggerListener = async () => {
    try {
        const organization = await Organization.findOne({});
        const results: TriggerEventLog[] = await sequelize.query('SELECT * FROM trigger_events_log WHERE eventTime > NOW() - INTERVAL 1 MINUTE',
            {
                type: QueryTypes.SELECT
            });
        for (const event of results) {
            try {
                if (event.tableName === 'jobcard_details') {
                    let splittedNumber = event.newData.split(':');
                    let jobcardNumber = splittedNumber[1].trim();
                    const jobcard = await JobCardDetails.findOne({ where: { jobcard_number: jobcardNumber } })
                    if (jobcard.model_number !== '0') {
                        const model = await Model.findOne({ where: { name: jobcard.model_number } });
                        if (event.actionType === 'INSERT') {
                            if (!model) {
                                await Model.create({
                                    name: jobcard.model_number,
                                    product_time: jobcard.job_time,
                                    no_of_operators: jobcard.no_of_persons,
                                    organizationId: organization.id,
                                }, { raw: true });
                            }
                        }
                        if (event.actionType === 'UPDATE') {
                            //need to update model because job time and no of persons updation should be reflected in model table
                            if (!model) {
                                await Model.create({
                                    name: jobcard.model_number,
                                    product_time: jobcard.job_time,
                                    no_of_operators: jobcard.no_of_persons,
                                    organizationId: organization.id,
                                }, { raw: true });
                            } else {
                                await Model.update({
                                    name: jobcard.model_number,
                                    product_time: jobcard.job_time,
                                    no_of_operators: jobcard.no_of_persons,
                                }, { where: { name: jobcard.model_number } });
                            }
                        }
                        if (event.actionType === 'DELETE') {
                            // no need to delete models
                        }
                    }
                }

                if (event.tableName === 'machine_live_status') {

                }

                if (event.tableName === 'printer_pool') {
                    let splittedNumber = event.newData.split(':');
                    let printerId = splittedNumber[1].trim();
                    const printerPool = await PrinterPool.findOne({ where: { id: printerId } });
                    // to get employeeId and name
                    let parts = printerPool.operator_name.split('-');
                    if (parts.length > 1) {
                        let id = parts[0].trim();
                        let employeeName = parts[1].trim();
                        if (id && employeeName) {

                            if (event.actionType === 'INSERT') {
                                await upsertEmployee(id, employeeName);
                            }
                            if (event.actionType === 'UPDATE') {
                                await upsertEmployee(id, employeeName);
                            }
                            if (event.actionType === 'DELETE') {
                                //no need to delete employees
                            }
                        } else {
                            throw new Error(`Missing id or employeeName for event ${event.actionType}.`);
                        }
                    } else {
                        throw new Error(`Unexpected operator_name format: ${printerPool.operator_name}`);
                    }
                }
            } catch (error) {
                console.error(`Error processing event ${event.id}: ${error.message}`);
            }
        }
    } catch (error) {
        console.error('Error while fetching trigger events:', error);
    }

    setTimeout(initTriggerListener, 60000);
};


async function upsertEmployee(id, employeeName) {
    try {
        const organization = await Organization.findOne({});
        if (!organization) {
            throw new Error('Organization not found');
        }

        const employee = await Employee.findOne({ where: { employeeId: +id, name: employeeName } });
        if (!employee) {
            await Employee.create({
                employeeId: +id,
                name: employeeName,
                organizationId: organization.id,
                status: 'active'
            });
        } else {
            await Employee.update({
                name: employeeName,
            }, { where: { employeeId: +id } });
        }
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}