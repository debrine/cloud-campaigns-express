import { Container } from '@azure/cosmos';
import { DatabaseClient } from '../database-client';
import { UserAccount, UserAccountDbModel } from '../models/user-account.model';
import {
  createUserAccountFactory,
  updateUserAccountFactory,
} from '../factories/user-account.factory';

export class UserAccountRepository {
  private container: Container;
  constructor() {
    const dbClient = DatabaseClient.getInstance();
    this.container = dbClient.getContainer('user-accounts');
  }

  async getUserAccountById(id: string): Promise<UserAccountDbModel> {
    const dbItem = await this.container.item(id).read();
    return UserAccountDbModel.parse(dbItem);
  }

  async getAllUserAccounts(): Promise<UserAccount[]> {
    const dbItems = await this.container.items.readAll().fetchAll();
    return dbItems.resources.map((dbItem) => UserAccount.parse(dbItem));
  }

  async createUserAccount(userAccount: UserAccount): Promise<UserAccount> {
    const itemToCreate = await createUserAccountFactory(userAccount);
    console.log('creating user account', itemToCreate);
    const dbItem = await this.container.items.create(itemToCreate);
    console.log('dbItem', dbItem.resource);

    return UserAccount.parse(dbItem.resource);
  }

  async updateUserAccount(
    userAccount: UserAccountDbModel
  ): Promise<UserAccount> {
    const savedUserAccount = await this.getUserAccountById(userAccount.id);

    const dbItem = this.container
      .item(userAccount.id)
      .replace(updateUserAccountFactory(userAccount, savedUserAccount));
    return UserAccount.parse(dbItem);
  }

  async getUserAccountByUsername(username: string): Promise<UserAccount> {
    const querySpec = {
      query: 'SELECT * FROM c WHERE c.username = @username',
      parameters: [
        {
          name: '@username',
          value: username,
        },
      ],
    };

    const { resources: results } = await this.container.items
      .query(querySpec)
      .fetchAll();

    return results[0];
  }

  async getUserAccountByEmail(email: string) {
    const querySpec = {
      query: 'SELECT * FROM c WHERE c.email = @email',
      parameters: [
        {
          name: '@email',
          value: email,
        },
      ],
    };

    const { resources: results } = await this.container.items
      .query(querySpec)
      .fetchAll();

    return results;
  }
}
