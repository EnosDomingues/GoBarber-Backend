import { Router } from 'express';

import ForgotPasswordController from '@modules/users/infra/http/controllers/SessionsController';
import ResetPasswordController from '@modules/users/infra/http/controllers/ResetPasswrodController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
