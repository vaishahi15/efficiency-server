import { Division } from '@sql-models';

export const get = async (req, res) => {
    try {
        const divisions = await Division.findAll();
        res.status(200).send(divisions);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const add = async (req, res) => {
    try {
        const division = await Division.create(req.body, { raw: true });
        res.status(200).send(division);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const updateDivision = async (req, res) => {
    const { id } = req.params;
    try {
        await Division.update(req.body, { where: { id } });
        const updatedDivision = await Division.findByPk(id);
        res.status(200).send(updatedDivision);
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}

export const deleteDivision = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedDivision = await Division.destroy({ where: { id } });
        if (deletedDivision) {
            res.status(200).send({ id });
        } else {
            res.status(200).send({ message: 'Division not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}