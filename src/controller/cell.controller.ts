import { Cell, Division } from '@sql-models';

export const get = async (req, res) => {
    try {
        const cells = await Cell.findAll({});
        res.status(200).send(cells);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const add = async (req, res) => {
    try {
        const cell = await Cell.create(req.body, { raw: true });
        res.status(200).send(cell);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const updateCell = async (req, res) => {
    const { id } = req.params;
    try {
        await Cell.update(req.body, { where: { id } });
        const updatedCell = await Cell.findByPk(id);
        res.status(200).send(updatedCell);
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}

export const deleteCell = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const deletedCell = await Cell.destroy({ where: { id } });
        if (deletedCell) {
            res.status(200).send({ id });
        } else {
            throw new Error('Cell not found.');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}