import { Model, Organization } from '@sql-models';

export const get = async (req, res) => {
    try {
        const { from, size } = req.query;
        const models = await Model.findAndCountAll({
            include: [{
                model: Organization,
                as: 'organization',
            }],
            limit: +size,
            offset: +from,
        });
        res.status(200).send(models);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const add = async (req, res) => {
    try {
        const model = await Model.create(req.body, { raw: true });
        res.status(200).send(model);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const updateModel = async (req, res) => {
    const { id } = req.params;
    try {
        await Model.update(req.body, { where: { id } });
        const updatedModel = await Model.findByPk(id);
        res.status(200).send(updatedModel);
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}

export const deleteModel = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedModel = await Model.destroy({ where: { id } });
        if (deletedModel) {
            res.status(200).send({ id });
        } else {
            throw new Error('Model not found.');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}