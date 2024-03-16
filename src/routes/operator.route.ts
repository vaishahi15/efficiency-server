import { Router } from 'express';
import { get, add, deleteOperator, updateOperator } from '@controller/operator.controller';

const router = Router();

router.get('/operator', get);

router.post('/operator', add);

router.delete('/operator/:id', deleteOperator);

router.patch('/operator/:id', updateOperator);

export { router as operatorRoutes };