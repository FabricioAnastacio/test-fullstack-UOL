import { ServiceError } from '../../interfaces/serviceResponse';
import { IUser } from '../../interfaces/IUser';
import verifyNewDataUser from './schemas';

export default function validateDataUser(data: IUser): ServiceError | null {
  const { error } = verifyNewDataUser.validate(data);
  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };
  return null;
}
