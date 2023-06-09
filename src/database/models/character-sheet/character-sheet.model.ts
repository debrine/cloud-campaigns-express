import { z } from 'zod';
import {
  AbilityScores,
  SavingThrowProficiencies,
  Skills,
} from './ability-scores.model';
import { CharacterSummaryModel } from './character-summary.model';
import { Ability } from './ability.model';

import { BaseDbModel } from '../base.model';
import {
  CharacterClass,
  CharacterRace,
} from '../../../enums/character-sheet-enums';

// ideally these are all in a common module
export const CharacterSheet = z.object({
  characterName: z.string(),
  playerName: z.string(),
  characterClass: z.nativeEnum(CharacterClass),
  characterLevel: z.number().min(0).max(20).default(1),
  abilityScores: AbilityScores.default(AbilityScores.parse({})),
  proficiencyBonus: z.number().min(0).max(10).default(2),
  alignment: z.string(),
  background: z.string(),
  race: z.nativeEnum(CharacterRace),
  experiencePoints: z.number().min(0).default(0),
  inspiration: z.boolean().default(false),
  skills: Skills.default(Skills.parse({})),
  armourClass: z.number().min(0).default(10),
  initiative: z.number().min(0).default(0),
  speed: z.number().min(0).default(30),
  hitPoints: z.number().min(0).default(0),
  partyMembers: z.array(CharacterSummaryModel).default([]),
  savingThrowProficiencies: SavingThrowProficiencies.default(
    SavingThrowProficiencies.parse({})
  ),
  abilities: z
    .object({
      class: z.array(Ability).default([]),
      racial: z.array(Ability).default([]),
      feat: z.array(Ability).default([]),
      item: z.array(Ability).default([]),
    })
    .default({
      class: [],
      racial: [],
      feat: [],
      item: [],
    }),
});

export type CharacterSheet = z.infer<typeof CharacterSheet>;

export const CharacterSheetDbModel = CharacterSheet.merge(BaseDbModel);

export type CharacterSheetDbModel = z.infer<typeof CharacterSheetDbModel>;
