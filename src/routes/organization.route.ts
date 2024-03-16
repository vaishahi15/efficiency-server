import { Router } from 'express';
import { get, add, deleteOrganization, updateOrganization } from '@controller/organization.controller';

const router = Router();

router.get('/organization', get);

router.post('/organization', add);

router.delete('/organization/:id', deleteOrganization);

router.patch('/organization/:id', updateOrganization);

export { router as organizationRoutes };