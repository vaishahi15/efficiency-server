import { Organization } from '@sql-models';

export const get = async (req, res) => {
    try {
        const organizations = await Organization.findAll();
        res.status(200).send(organizations);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const add = async (req, res) => {
    try {
        const organization = await Organization.create(req.body, { raw: true });
        res.status(200).send(organization);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const updateOrganization = async (req, res) => {
    const { id } = req.params;
    try {
        await Organization.update(req.body, { where: { id } });
        const updatedOrganization = await Organization.findByPk(id);
        res.status(200).send(updatedOrganization);
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}

export const deleteOrganization = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedOrganization = await Organization.destroy({ where: { id } });
        if (deletedOrganization) {
            res.status(200).send({ id });
        } else {
            res.status(200).send({ message: 'Organization not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}