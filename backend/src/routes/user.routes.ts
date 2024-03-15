import { Router } from 'express';
import UserController from '../controller/userController';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/', (req, res) => userController.createUser(req, res));

export default userRouter;
