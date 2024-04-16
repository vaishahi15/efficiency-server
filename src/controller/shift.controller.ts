import { Shift } from '@sql-models';

export const get = async (req, res) => {
    try {
        const shifts = await Shift.findAll();
        res.status(200).send(shifts);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const add = async (req, res) => {
    try {
        const shift = await Shift.create(req.body, { raw: true });
        res.status(200).send(shift);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const updateShift = async (req, res) => {
    const { id } = req.params;
    try {
        await Shift.update(req.body, { where: { id } });
        const updatedShift = await Shift.findByPk(id);
        res.status(200).send(updatedShift);
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}

export const deleteShift = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedShift = await Shift.destroy({ where: { id } });
        if (deletedShift) {
            res.status(200).send({ id });
        } else {
            throw new Error('Shift not found.');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}