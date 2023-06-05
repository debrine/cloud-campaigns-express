import { z } from 'zod';
import { BaseDbModel } from './base.model';
import e from 'express';

export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export const UserAccount = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.nativeEnum(Role),
});

export const UserAccountNoPassword = z.object({
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.nativeEnum(Role),
});

export type UserAccount = z.infer<typeof UserAccount>;

export const UserAccountDbModel = UserAccount.merge(BaseDbModel);

export type UserAccountDbModel = z.infer<typeof UserAccountDbModel>;

export const UserAccountDbModelNoPassword =
  UserAccountNoPassword.merge(BaseDbModel);

export type UserAccountDbModelNoPassword = z.infer<
  typeof UserAccountDbModelNoPassword
>;
