import {Router} from 'express';
import { AuthenticateUseCaseController } from '../modules/accounts/useCases/authenticateUserCase/AuthenticateUseCaseController';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUseCaseController();

authenticateRoutes.post('/sessions', authenticateUserController.handle)

export {authenticateRoutes}