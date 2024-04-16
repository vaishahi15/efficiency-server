import { Cell, Division, Employee, JobCardDetails, MachineLiveStatus, Model, Organization, PrinterPool, Shift, TriggerEventLog } from "@sql-models";

export const removeTable = async() => {
    await Cell.drop();
    await JobCardDetails.drop();
    await MachineLiveStatus.drop();
    await Model.drop();
    await TriggerEventLog.drop();
    await Shift.drop();
    await PrinterPool.drop();
    //await Division.drop();
    //await Employee.drop();
    //await Organization.drop();
}