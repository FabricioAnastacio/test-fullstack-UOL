import Joi from 'joi';

const emailValid = /^[a-z0-9]+@[a-z0-9]+\.[a-z]/i;
const emailInvalid = '"email" must be a valid email';

const verifyNewDataUser = Joi.object().keys({
  name: Joi.string().min(2).required(),
  email: Joi.string().regex(emailValid).message(emailInvalid).required(),
  cpf: Joi.string().min(14).max(14).required(),
  phone: Joi.string().min(11).max(11).required(),
  status: Joi.string().required(),
});

export default verifyNewDataUser;
