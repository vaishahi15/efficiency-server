import { Router } from 'express';
import { login, logout, verifyUser } from '@controller/auth.controller';

const router = Router();

router.post('/login', login);

router.post('/logout', logout);

router.post('/verifyUser', verifyUser);

export { router as authRoutes };