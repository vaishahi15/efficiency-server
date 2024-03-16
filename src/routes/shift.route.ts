import { Router } from 'express';
import { get, add, deleteShift, updateShift } from '@controller/shift.controller';

const router = Router();

router.get('/shift', get);

router.post('/shift', add);

router.delete('/shift/:id', deleteShift);

router.patch('/shift/:id', updateShift);

export { router as shiftRoutes };