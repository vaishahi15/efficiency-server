import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Employee } from '@sql-models';

export const login = async (req, res) => {

    const { username: name, password } = req.body;

    try {
        const user = await Employee.findOne({ where: { name }, attributes: ['id', 'name', 'password', 'status', 'role'] });

        if (!user) {
            throw new Error('Email or Password is wrong.');
        }

        if (user.status !== 'active') {
            throw new Error('User Inactive.');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Email or Password is wrong.');
        }

        const token = jwt.sign({ id: user.id }, 'acceedo12345');

        await Employee.update({ token }, { where: { id: user.id } });

        res.status(200).send({
            user: {
                id: user.id,
                name: user.name,
                status: user.status,
                role: user.role
            }, token
        });
    } catch (err) {
        if (err.message === 'Email or Password is wrong.' || err.message === 'User Inactive.') {
            return res.status(401).send({ message: err.message });
        }
        res.status(500).send({ err: 'error' });
    }
}

export const logout = async (req, res) => {
    const { id } = req.body;

    try {
        await Employee.update({ token: null }, { where: { id } });
        res.status(200).send({ message: 'success' });
    } catch (err) {
        res.status(500).send({ message: 'error' });
    }
}

export const verifyUser = async (req, res) => {

    try {
        const { token } = req.body;
        const user = await Employee.findOne({ where: { token } });
        if (!user) {
            throw new Error('No user found.');
        }
        res.status(200).send({ user });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: 'error' });
    }
}