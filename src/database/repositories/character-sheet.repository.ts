import { Container } from '@azure/cosmos';
import { DatabaseClient } from '../database-client';

export class CharacterSheetRepository {
  private container: Container;
  constructor() {
    const dbClient = DatabaseClient.getInstance();
    this.container = dbClient.getContainer('character-sheets');
  }

  // todo integrate factories
  async getCharacterSheetById(id: string) {
    const dbItem = this.container.item(id).read();
  }

  async getAllCharacterSheets() {
    const dbItems = this.container.items.readAll();
  }

  async createCharacterSheet(characterSheet: any) {
    const dbItem = this.container.items.create(characterSheet);
  }

  async updateCharacterSheet(characterSheet: any) {
    const dbItem = this.container
      .item(characterSheet.id)
      .replace(characterSheet);
  }

  async deleteCharacterSheet(id: string) {
    const dbItem = this.container.item(id).delete();
  }
}
