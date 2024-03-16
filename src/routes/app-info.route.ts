import { Router } from 'express';
import { update, get } from '@controller/app-info.controller';

const router = Router();

router.get('/app', get);

router.patch('/user/:id', update);

export { router as appRoutes };