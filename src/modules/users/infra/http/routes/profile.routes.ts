import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticate);
profileRouter.put('/', profileController.update);
profileRouter.get('/', profileController.show);

export default profileRouter;
