import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate'

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticate);

profileRouter.put(
  '/',
  celebrate({[Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    old_password: Joi.string(),
    password: Joi.string(),
    password_confirmation: Joi.string().valid(Joi.ref('password')),

  }}),
  profileController.update);

profileRouter.get('/', profileController.show);

export default profileRouter;
