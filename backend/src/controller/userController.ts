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

  public async findAllUsers(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.serviceUser.getAllUsers();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async findUserSearch(req: Request, res: Response): Promise<Response> {
    const { q } = req.query;

    const { status, data } = await this.serviceUser.getUserBySearch(String(q));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async userUpdate(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const upUser = req.body;

    const { status, data } = await this.serviceUser.updateUser(upUser, Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, data } = await this.serviceUser.delUserById(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
