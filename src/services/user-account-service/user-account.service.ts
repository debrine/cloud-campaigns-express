import { UserAccount } from '../../database/models/user-account.model';
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
  ): Promise<UserAccount> {
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
    return userAccount;
  }

  async registerUser(userAccount: UserAccount): Promise<UserAccount> {
    const existingUserAccount =
      await this.userRepository.getUserAccountByUsername(userAccount.username);
    if (existingUserAccount) {
      throw new Error('Username already exists');
    }
    return await this.userRepository.createUserAccount(userAccount);
  }

  async getUserAccountById(id: string): Promise<UserAccount> {
    return await this.userRepository.getUserAccountById(id);
  }

  async getAllUserAccounts(): Promise<UserAccount[]> {
    return await this.userRepository.getAllUserAccounts();
  }

  async editUserAccount(userAccount: UserAccount): Promise<UserAccount> {
    return await this.userRepository.updateUserAccount(userAccount);
  }
}
