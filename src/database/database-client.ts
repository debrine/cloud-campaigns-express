import { Container, Database } from '@azure/cosmos';
import { CosmosClient } from '@azure/cosmos';

const dbUri = process.env.DB_URI ?? '';
const dbPrimaryKey = process.env.DB_PRIMARY_KEY ?? '';

export class DatabaseClient {
  private static instance: DatabaseClient;
  private client: CosmosClient;

  private constructor() {
    this.client = new CosmosClient({
      endpoint: dbUri,
      key: dbPrimaryKey,
    });
  }

  static getInstance(): DatabaseClient {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new DatabaseClient();
    }
    return DatabaseClient.instance;
  }

  getClient(): CosmosClient {
    return this.client;
  }

  getContainer(containerId: string): Container {
    return this.client.database('cloud-campaigns').container(containerId);
  }
}

const endpoint = 'https://<your-account-name>.documents.azure.com:443/';
const key = '<your-account-key>';
const databaseId = '<database-name>';
const containerId = '<container-name>';

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

export default container;
