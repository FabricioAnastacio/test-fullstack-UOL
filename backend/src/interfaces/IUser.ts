export interface IUser {
  id?: number,
  name: string,
  email: string,
  phone: string,
  cpf: string,
  status: string
}

export interface IUserModel {
  findAllUsers(): Promise<IUser[] | null>,
  findBySearch(keyword: string): Promise<IUser | null>,
  createUser(user: IUser): Promise<IUser>,
  updateUser(newDtaUser: IUser, id: number): Promise<void>,
  delete(id: number): Promise<void>
}
