import { ServiceResponse } from '../interfaces/serviceResponse';
import { IUser, IUserModel } from '../interfaces/IUser';
import ModelUser from '../model/userModel';
import validateDataUser from './validations/validateInput';

class UserService {
  constructor(
    private userModel: IUserModel = new ModelUser(),
  ) {}

  public async addNewUser(user: IUser): Promise<ServiceResponse<IUser>> {
    const error = validateDataUser(user);
    if (error) return { status: error.status, data: error.data };

    const allUsers = await this.userModel.findAllUsers();
    const causedConflict = allUsers?.find(
      (people) => (people.email === user.email || people.cpf === user.cpf) && 'error',
    );
    if (causedConflict) {
      return { status: 'CONFLICT', data: { message: 'CPF or Email already exists' } };
    }

    const addUser = await this.userModel.createUser(user);

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

  public async updateUser(user: IUser, id: number): Promise<ServiceResponse<string>> {
    await this.userModel.updateUser(user, id);

    return { status: 'SUCCESSFUL', data: 'Updated' };
  }

  public async delUserById(id: number): Promise<ServiceResponse<string>> {
    await this.userModel.delete(id);

    return { status: 'DELETED', data: { message: 'Deleted' } };
  }
}

export default UserService;
