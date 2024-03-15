import { Request, Response } from 'express';
import UserService from '../services/userServices';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private serviceUser = new UserService(),
  ) {}

  public async createUser(req: Request, res: Response): Promise<Response> {
    const newUser = req.body;
    const { status, data } = await this.serviceUser.addNewUser(newUser);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
