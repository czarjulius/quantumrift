const Joi = require('@hapi/joi').extend(require('@joi/date'));

export const createProductSchema = Joi.object({
  name: Joi.string().trim().max(50).required(),
  price: Joi.number().positive().required(),
});

export const getProductsSchema = Joi.object({
  page: Joi.number().positive(),
  limit: Joi.number().positive().min(1).max(100),
});
