import { Container } from '@azure/cosmos';
import { DatabaseClient } from '../database-client';
import {
  CharacterSheet,
  CharacterSheetDbModel,
} from '../models/character-sheet/character-sheet.model';
import {
  createUserAccountFactory,
  updateUserAccountFactory,
} from '../factories/user-account.factory';
import {
  createCharacterSheetFactory,
  updateCharacterSheetFactory,
} from '../factories/character-sheet.factory';

export class CharacterSheetRepository {
  private container: Container;
  constructor() {
    const dbClient = DatabaseClient.getInstance();
    this.container = dbClient.getContainer('character-sheets');
  }

  // todo integrate factories
  async getCharacterSheetById(id: string): Promise<CharacterSheetDbModel> {
    const dbItem = await this.container.item(id).read();
    console.log('dbItem', dbItem.resource);
    return CharacterSheetDbModel.parse(dbItem.resource);
  }

  async getAllCharacterSheets(): Promise<CharacterSheetDbModel[]> {
    const dbItems = await this.container.items.readAll().fetchAll();
    return dbItems.resources.map((dbItem) =>
      CharacterSheetDbModel.parse(dbItem)
    );
  }

  async createCharacterSheet(
    characterSheet: CharacterSheet
  ): Promise<CharacterSheetDbModel> {
    const itemToCreate = await createCharacterSheetFactory(characterSheet);
    console.log('creating character sheet', itemToCreate);
    const dbItem = await this.container.items.create(itemToCreate);
    console.log('dbItem', dbItem.resource);

    return CharacterSheetDbModel.parse(dbItem.resource);
  }

  async updateCharacterSheet(
    id: string,
    characterSheet: CharacterSheet
  ): Promise<CharacterSheetDbModel> {
    const savedCharacterSheet = await this.getCharacterSheetById(id);

    const dbItem = await this.container
      .item(id)
      .replace(
        updateCharacterSheetFactory(characterSheet, savedCharacterSheet)
      );
    return CharacterSheetDbModel.parse(dbItem.resource);
  }
}
