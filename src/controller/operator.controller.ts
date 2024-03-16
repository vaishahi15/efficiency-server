import { Operator } from '@sql-models';

export const get = async (req, res) => {
    try {
        const operators = await Operator.findAll();
        res.status(200).send(operators);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const add = async (req, res) => {
    try {
        const operator = await Operator.create(req.body, { raw: true });
        res.status(200).send(operator);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const updateOperator = async (req, res) => {
    const { id } = req.params;
    try {
        await Operator.update(req.body, { where: { id } });
        const updatedOperator = await Operator.findByPk(id);
        res.status(200).send(updatedOperator);
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}

export const deleteOperator = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedOperator = await Operator.destroy({ where: { id } });
        if (deletedOperator) {
            res.status(200).send({ id });
        } else {
            res.status(200).send({ message: 'Operator not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}