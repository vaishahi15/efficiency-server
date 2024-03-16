import { AppInfo } from "@sql-models";

export const get = async (req, res) => {
    try {
        const app = await AppInfo.findOne();
        res.status(200).send(app);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'network error' });
    }
}

export const update = async (req, res) => {
    const { id } = req.params;
    try {
        await AppInfo.update(req.body, { where: { id } });
        const updatedApp = await AppInfo.findByPk(id);
        res.status(200).send(updatedApp);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'network error' });
    }
}