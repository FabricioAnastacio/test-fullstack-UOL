import { Router } from 'express';
import UserController from '../controller/userController';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/', (req, res) => userController.createUser(req, res));
userRouter.get('/search', (req, res) => userController.findUserSearch(req, res));
userRouter.get('/', (req, res) => userController.findAllUsers(req, res));

export default userRouter;
