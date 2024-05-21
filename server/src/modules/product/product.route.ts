import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import * as productController from './product.controller';
import * as productSchema from './product.schema';

const router = Router();

router.post(
  '/items',
  validateRequest(productSchema.createProductSchema, 'body'),
  productController.createProductController
);

router.get(
  '/items',
  validateRequest(productSchema.getProductsSchema, 'query'),
  productController.getProductsController
);

export default router;
