import {
  CharacterSheet,
  CharacterSheetDbModel,
} from '../models/character-sheet/character-sheet.model';
import { createBaseFactory, updateBaseFactory } from './base.factory';

export const createCharacterSheetFactory = (
  request: any
): CharacterSheetDbModel => {
  return CharacterSheetDbModel.parse({
    ...createBaseFactory(),
    characterName: request.characterName,
    playerName: request.playerName,
    characterClass: request.characterClass,
    characterLevel: request.characterLevel,
    abilityScores: request.abilityScores,
    proficiencyBonus: request.proficiencyBonus,
    alignment: request.alignment,
    background: request.background,
    race: request.race,
    experiencePoints: request.experiencePoints,
    inspiration: request.inspiration,
    skills: request.skills,
    armourClass: request.armourClass,
    initiative: request.initiative,
    speed: request.speed,
    hitPoints: request.hitPoints,
    partyMembers: request.partyMembers,
    savingThrowProficiencies: request.savingThrowProficiencies,
    abilities: request.abilities,
  });
};

export const updateCharacterSheetFactory = (
  request: any,
  characterSheet: CharacterSheetDbModel
): CharacterSheetDbModel => {
  return CharacterSheetDbModel.parse({
    ...updateBaseFactory(characterSheet),
    characterName: request.characterName,
    playerName: request.playerName,
    characterClass: request.characterClass,
    characterLevel: request.characterLevel,
    abilityScores: request.abilityScores,
    proficiencyBonus: request.proficiencyBonus,
    alignment: request.alignment,
    background: request.background,
    race: request.race,
    experiencePoints: request.experiencePoints,
    inspiration: request.inspiration,
    skills: request.skills,
    armourClass: request.armourClass,
    initiative: request.initiative,
    speed: request.speed,
    hitPoints: request.hitPoints,
    partyMembers: request.partyMembers,
    savingThrowProficiencies: request.savingThrowProficiencies,
    abilities: request.abilities,
  });
};
