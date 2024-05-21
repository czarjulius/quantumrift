import { AddProductInterface, GetProductsInterface } from './product.interface';
import { v4 as uuidv4 } from 'uuid';

let items: AddProductInterface[] = [];

export const createProduct = async (data: AddProductInterface) => {
  try {
    const newItem = { ...data, id: uuidv4() };
    items.push(newItem);
    return {
      error: false,
      message: 'Product added successfully.',
      data,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: (err as any).message,
      data,
    };
  }
};

export const getProducts = async (_: GetProductsInterface) => {
  try {
    return {
      error: false,
      message: 'Products fetched successfully',
      data: items,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: (err as any).message,
      data: null,
    };
  }
};
