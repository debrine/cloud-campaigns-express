import { Container, Database } from '@azure/cosmos';
import { CosmosClient } from '@azure/cosmos';

export class DatabaseClient {
  private static instance: DatabaseClient;
  private client: CosmosClient;

  private constructor() {
    this.client = new CosmosClient({
      endpoint: process.env.DB_URI ?? '',
      key: process.env.DB_PRIMARY_KEY ?? '',
    });
  }

  static getInstance(): DatabaseClient {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new DatabaseClient();
    }
    return DatabaseClient.instance;
  }

  getContainer(containerId: string): Container {
    return this.client.database('cloud-campaigns').container(containerId);
  }
}
