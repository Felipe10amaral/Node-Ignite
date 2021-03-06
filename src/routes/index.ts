import {Router} from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationRouter } from './specification.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specification", specificationRouter);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export {router}