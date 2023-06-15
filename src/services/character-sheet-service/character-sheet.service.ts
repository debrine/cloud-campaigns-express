import {
  CharacterSheet,
  CharacterSheetDbModel,
} from '../../database/models/character-sheet/character-sheet.model';
import { CharacterSheetRepository } from '../../database/repositories/character-sheet.repository';

export default class CharacterSheetService {
  serviceRepository: CharacterSheetRepository;
  constructor() {
    this.serviceRepository = new CharacterSheetRepository();
  }

  public getCharacterSheet = async (
    id: string
  ): Promise<CharacterSheetDbModel> => {
    return await this.serviceRepository.getCharacterSheetById(id);
  };

  public createCharacterSheet = async (
    characterSheet: CharacterSheet
  ): Promise<CharacterSheetDbModel> => {
    return await this.serviceRepository.createCharacterSheet(characterSheet);
  };

  public updateCharacterSheet = async (
    id: string,
    characterSheet: CharacterSheet
  ): Promise<CharacterSheetDbModel> => {
    return await this.serviceRepository.updateCharacterSheet(
      id,
      characterSheet
    );
  };
}
