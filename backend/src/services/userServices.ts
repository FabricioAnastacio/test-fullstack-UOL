import { ServiceResponse } from '../interfaces/serviceResponse';
import { IUser, IUserModel } from '../interfaces/IUser';
import ModelUser from '../model/userModel';

class UserService {
  constructor(
    private userModel: IUserModel = new ModelUser(),
  ) {}

  public async addNewUser(user: IUser): Promise<ServiceResponse<IUser>> {
    const newUser = {
      name: user.name,
      cpf: user.cpf,
      email: user.email,
      phone: user.phone,
      status: user.status,
    };

    const addUser = await this.userModel.createUser(newUser);

    return { status: 'CREATED', data: addUser };
  }

  public async getAllUsers(): Promise<ServiceResponse<IUser[]>> {
    const users = await this.userModel.findAllUsers();

    if (!users || users.length === 0) {
      return { status: 'NOT_FOUND', data: { message: 'Users not found' } };
    }

    return { status: 'SUCCESSFUL', data: users };
  }

  public async getUserBySearch(keyword: string): Promise<ServiceResponse<IUser>> {
    const users = await this.userModel.findBySearch(keyword);

    if (!users) return { status: 'NOT_FOUND', data: { message: 'Users not found' } };

    return { status: 'SUCCESSFUL', data: users };
  }
}

export default UserService;
