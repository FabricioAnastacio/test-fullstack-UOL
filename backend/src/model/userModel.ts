import { Op } from 'sequelize';
import UserModel from '../database/model/UserModel';
import { IUser, IUserModel } from '../interfaces/IUser';

class ModelUser implements IUserModel {
  private model = UserModel;

  async findBySearch(keyword: string): Promise<IUser | null> {
    const user = await this.model.findOne({
      where: {
        name: {
          [Op.like]: `%${keyword}%`,
        },
      },
    });
    return user;
  }

  async findAllUsers(): Promise<IUser[] | null> {
    const user = await this.model.findAll();
    return user;
  }

  async createUser(user: IUser): Promise<IUser> {
    const newUser = await this.model.create(user);
    return newUser;
  }

  async updateUser(user: IUser, id: number): Promise<void> {
    await this.model.update(
      { ...user },
      { where: { id } },
    );
  }

  async delete(email: string): Promise<void> {
    this.model.destroy({ where: { email } });
  }
}

export default ModelUser;
