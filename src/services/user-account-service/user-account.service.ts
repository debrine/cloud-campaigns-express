import {
  UserAccount,
  UserAccountDbModel,
  UserAccountDbModelNoPassword,
} from '../../database/models/user-account.model';
import { UserAccountRepository } from '../../database/repositories/user-account.repository';
import { compare } from 'bcrypt';

export default class UserAccountService {
  userRepository: UserAccountRepository;
  constructor() {
    this.userRepository = new UserAccountRepository();
  }

  async authenticateUser(
    username: string,
    password: string
  ): Promise<UserAccountDbModelNoPassword> {
    const userAccount = await this.userRepository.getUserAccountByUsername(
      username
    );

    if (userAccount == null) {
      throw new Error('Invalid username');
    }

    const isPasswordValid = await compare(password, userAccount.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return UserAccountDbModelNoPassword.parse(userAccount);
  }

  async registerUser(
    userAccount: UserAccount
  ): Promise<UserAccountDbModelNoPassword> {
    const existingUserAccount =
      await this.userRepository.getUserAccountByUsername(userAccount.username);
    if (existingUserAccount) {
      console.log('existing user account', existingUserAccount);
      throw new Error('Username already exists');
    }

    try {
      const newUser = await this.userRepository.createUserAccount(userAccount);

      return UserAccountDbModelNoPassword.parse(newUser);
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user account');
    }
  }

  async getUserAccountById(id: string): Promise<UserAccount> {
    return await this.userRepository.getUserAccountById(id);
  }

  async getAllUserAccounts(): Promise<UserAccount[]> {
    return await this.userRepository.getAllUserAccounts();
  }

  async editUserAccount(userAccount: UserAccountDbModel): Promise<UserAccount> {
    return await this.userRepository.updateUserAccount(userAccount);
  }
}
