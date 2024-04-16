import { Router } from 'express';
import { get, add, deleteDivision, updateDivision, getDivisionById } from '@controller/division.controller';

const router = Router();

router.get('/division', get);

router.get('/division/:id', getDivisionById);

router.post('/division', add);

router.delete('/division/:id', deleteDivision);

router.patch('/division/:id', updateDivision);

export { router as divisionRoutes };