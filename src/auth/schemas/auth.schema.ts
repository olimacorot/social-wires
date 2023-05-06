import * as Joi from '@hapi/joi';

const partialSingInSchema = {
  username: Joi.string().required(),
  password: Joi.string().required(),
};

const partialSingUpSchema = {
  username: Joi.string().required(),
  password: Joi.string().required(),
};

const singInSchema = Joi.object(partialSingInSchema).options({
  abortEarly: false,
});
const singUpSchema = Joi.object({
  ...partialSingInSchema,
  ...partialSingUpSchema,
}).options({ abortEarly: false });
export { singInSchema, singUpSchema };
