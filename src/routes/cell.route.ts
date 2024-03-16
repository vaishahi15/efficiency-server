import { Router } from 'express';
import { get, add, deleteCell, updateCell } from '@controller/cell.controller';

const router = Router();

router.get('/cell', get);

router.post('/cell', add);

router.delete('/cell/:id', deleteCell);

router.patch('/cell/:id', updateCell);

export { router as cellRoutes };