import { Router } from 'express';
import { get, add, deleteDivision, updateDivision } from '@controller/division.controller';

const router = Router();

router.get('/division', get);

router.post('/division', add);

router.delete('/division/:id', deleteDivision);

router.patch('/division/:id', updateDivision);

export { router as divisionRoutes };