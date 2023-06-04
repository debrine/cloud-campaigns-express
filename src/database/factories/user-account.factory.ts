import { UserAccount, UserAccountDbModel } from '../models/user-account.model';
import { createBaseFactory, updateBaseFactory } from './base.factory';
import { hash } from 'bcrypt';

export const createUserAccountFactory = async (request: any) => {
  console.log('creating user from request', request);
  return UserAccountDbModel.parse({
    ...createBaseFactory(),
    username: request.username,
    password: await hash(request.password, 10),
    email: request.email,
    firstName: request.firstName,
    lastName: request.lastName,
    role: request.role,
  });
};

export const updateUserAccountFactory = async (
  request: any,
  userAccount: UserAccountDbModel
) => {
  return UserAccountDbModel.parse({
    ...updateBaseFactory(userAccount),
    username: request.email,
    password: userAccount.password,
    email: request.email,
    firstName: request.firstName,
    lastName: request.lastName,
    role: request.role,
  });
};
