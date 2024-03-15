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
}

export default UserService;
