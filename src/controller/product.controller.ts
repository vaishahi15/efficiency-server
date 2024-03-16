import { Product } from '@sql-models';

export const get = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const add = async (req, res) => {
    try {
        const product = await Product.create(req.body, { raw: true });
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.send({ message: 'network error' });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.update(req.body, { where: { id } });
        const updatedProduct = await Product.findByPk(id);
        res.status(200).send(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.destroy({ where: { id } });
        if (deletedProduct) {
            res.status(200).send({ id });
        } else {
            res.status(200).send({ message: 'Product not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ messgae: 'network error' });
    }
}