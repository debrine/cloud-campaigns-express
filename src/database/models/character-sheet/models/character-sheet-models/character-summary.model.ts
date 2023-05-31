import { z } from 'zod';
import {
  CharacterClass,
  CharacterRace,
} from '../../enums/character-sheet-enums';

export const CharacterSummaryModel = z.object({
  id: z.string(), // UUID Type?
  characterName: z.string(),
  playerName: z.string(),
  characterClass: z.nativeEnum(CharacterClass),
  characterLevel: z.number().optional(),
  characterRace: z.nativeEnum(CharacterRace),
});

export type CharacterSummaryModel = z.infer<typeof CharacterSummaryModel>;
