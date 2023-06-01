import { CharacterSheet } from '../models/character-sheet/character-sheet.model';
import { v4 as uuid } from 'uuid';

export const createCharacterSheetFactory = (request: any) => {
  return CharacterSheet.parse({
    id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
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
  characterSheet: CharacterSheet
) => {
  return CharacterSheet.parse({
    id: characterSheet.id,
    createdAt: characterSheet.createdAt,
    updatedAt: new Date(),
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
