import { Router } from 'express';
import { get, add, deleteProduct, updateProduct } from '@controller/product.controller';

const router = Router();

router.get('/product', get);

router.post('/product', add);

router.delete('/product/:id', deleteProduct);

router.patch('/product/:id', updateProduct);

export { router as productRoutes };