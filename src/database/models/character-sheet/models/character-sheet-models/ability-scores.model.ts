import { z } from 'zod';
import {
  AbilityType,
  SkillProficiencyLevel,
} from '../../enums/character-sheet-enums';

export const AbilityScoreWithModifier = z.object({
  abilityName: z.string(),
  abilityScore: z.number().min(1).max(30).default(10),
  abilityModifier: z.number().min(-5).max(10).default(0),
});

export type AbilityScoreWithModifier = z.infer<typeof AbilityScoreWithModifier>;

export const AbilityScores = z.object({
  strength: AbilityScoreWithModifier.default({
    abilityName: 'Strength',
    abilityScore: 10,
    abilityModifier: 0,
  }),
  dexterity: AbilityScoreWithModifier.default({
    abilityName: 'Dexterity',
    abilityScore: 10,
    abilityModifier: 0,
  }),
  constitution: AbilityScoreWithModifier.default({
    abilityName: 'Constitution',
    abilityScore: 10,
    abilityModifier: 0,
  }),
  intelligence: AbilityScoreWithModifier.default({
    abilityName: 'Intelligence',
    abilityScore: 10,
    abilityModifier: 0,
  }),
  wisdom: AbilityScoreWithModifier.default({
    abilityName: 'Wisdom',
    abilityScore: 10,
    abilityModifier: 0,
  }),
  charisma: AbilityScoreWithModifier.default({
    abilityName: 'Charisma',
    abilityScore: 10,
    abilityModifier: 0,
  }),
});

export type AbilityScores = z.infer<typeof AbilityScores>;

export const SkillDetails = z.object({
  skillName: z.string(),
  skillProficiencyLevel: z.nativeEnum(SkillProficiencyLevel),
  skillModifier: z.number().min(-5).max(10),
  skillAbility: z.string(), // enum?
});

export type SkillDetails = z.infer<typeof SkillDetails>;

export const Skills = z.object({
  acrobatics: SkillDetails.default({
    skillName: 'Acrobatics',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Dexterity,
  }),
  animalhandling: SkillDetails.default({
    skillName: 'Animal Handling',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Wisdom,
  }),
  arcana: SkillDetails.default({
    skillName: 'Arcana',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Intelligence,
  }),
  athletics: SkillDetails.default({
    skillName: 'Athletics',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Strength,
  }),
  deception: SkillDetails.default({
    skillName: 'Deception',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Charisma,
  }),
  history: SkillDetails.default({
    skillName: 'History',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Intelligence,
  }),
  insight: SkillDetails.default({
    skillName: 'Insight',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Wisdom,
  }),
  intimidation: SkillDetails.default({
    skillName: 'Intimidation',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Charisma,
  }),
  investigation: SkillDetails.default({
    skillName: 'Investigation',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Intelligence,
  }),
  medicine: SkillDetails.default({
    skillName: 'Medicine',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Wisdom,
  }),
  nature: SkillDetails.default({
    skillName: 'Nature',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Intelligence,
  }),
  perception: SkillDetails.default({
    skillName: 'Perception',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Wisdom,
  }),
  performance: SkillDetails.default({
    skillName: 'Performance',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Charisma,
  }),
  persuasion: SkillDetails.default({
    skillName: 'Persuasion',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Charisma,
  }),
  religion: SkillDetails.default({
    skillName: 'Religion',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Intelligence,
  }),
  sleightofhand: SkillDetails.default({
    skillName: 'Sleight of Hand',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Dexterity,
  }),
  stealth: SkillDetails.default({
    skillName: 'Stealth',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Dexterity,
  }),
  survival: SkillDetails.default({
    skillName: 'Survival',
    skillProficiencyLevel: SkillProficiencyLevel.None,
    skillModifier: 0,
    skillAbility: AbilityType.Wisdom,
  }),
});

export type Skills = z.infer<typeof Skills>;

export const SavingThrowProficiencies = z.object({
  strength: z
    .nativeEnum(SkillProficiencyLevel)
    .default(SkillProficiencyLevel.None),
  dexterity: z
    .nativeEnum(SkillProficiencyLevel)
    .default(SkillProficiencyLevel.None),
  constitution: z
    .nativeEnum(SkillProficiencyLevel)
    .default(SkillProficiencyLevel.None),
  intelligence: z
    .nativeEnum(SkillProficiencyLevel)
    .default(SkillProficiencyLevel.None),
  wisdom: z
    .nativeEnum(SkillProficiencyLevel)
    .default(SkillProficiencyLevel.None),
  charisma: z
    .nativeEnum(SkillProficiencyLevel)
    .default(SkillProficiencyLevel.None),
});

export type SavingThrowProficiencies = z.infer<typeof SavingThrowProficiencies>;
