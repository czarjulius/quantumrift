import { HTTP, RESPONSE } from '../../constants/enums';
import { Request, Response, NextFunction } from 'express';
import createError from '../../helpers/createError';
import * as productService from './product.service';
import { GetProductsInterface, AddProductInterface } from './product.interface';

export const createProductController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, message, data } = await productService.createProduct({
      ...req.body,
    } as AddProductInterface);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, {
          status: RESPONSE.ERROR,
          message,
          data,
        })
      );
    }

    return res.status(201).json({ message, data });
  } catch (err) {
    console.error(err);
    return next(createError.InternalServerError(err as any));
  }
};

export const getProductsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, message, data } = await productService.getProducts({
      ...(req as any).query,
    } as GetProductsInterface);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, {
          status: RESPONSE.ERROR,
          message,
          data,
        })
      );
    }
    return res.status(200).json({ message, data });
  } catch (err) {
    console.error(err);
    return next(createError.InternalServerError(err));
  }
};
