import { Router } from 'express';
import { get, add, deleteModel, updateModel } from '@controller/model.controller';

const router = Router();

router.get('/model', get);

router.post('/model', add);

router.delete('/model/:id', deleteModel);

router.patch('/model/:id', updateModel);

export { router as modelRoutes };