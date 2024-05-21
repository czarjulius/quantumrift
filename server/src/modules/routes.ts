import { Router } from 'express';
import productRoutes from './product/product.route';

const router: Router = Router();

router.use('/', productRoutes);

export default router;
