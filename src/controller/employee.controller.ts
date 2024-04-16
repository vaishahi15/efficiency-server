import { Division, Employee, Organization } from '@sql-models';

export const get = async (req, res) => {
    try {
        const { from, size } = req.query;
        const employees = await Employee.findAndCountAll({
            include: [{
                model: Organization,
                as: 'organization',
            },
            {
                model: Division,
                as: 'division',
            }],
            attributes: ['id', 'employeeId', 'name', 'status', 'role', 'divisionId', 'organizationId'],
            limit: +size,
            offset: +from,
        });
        res.status(200).send(employees);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const getSupervisor = async (req, res) => {
    try {
        const supervisors = await Employee.findAll({
            include: [{
                model: Organization,
                as: 'organization',
            },
            {
                model: Division,
                as: 'division',
            }],
            where: {
                role: 'supervisor'
            }
        });
        res.status(200).send(supervisors);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findOne({
            where: { id }
        })
        res.status(200).send(employee);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const add = async (req, res) => {
    try {
        const employee = await Employee.create(req.body, { raw: true });
        res.status(200).send(employee);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        await Employee.update(req.body, { where: { id } });
        const updatedEmployee = await Employee.findByPk(id);
        res.status(200).send(updatedEmployee);
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}

export const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEmployee = await Employee.destroy({ where: { id } });
        if (deletedEmployee) {
            res.status(200).send({ id });
        } else {
            throw new Error('Employee not found.');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}