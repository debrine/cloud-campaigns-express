import { z } from 'zod';
import { BaseDbModel } from './base.model';

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

export type UserAccount = z.infer<typeof UserAccount>;

export const UserAccountDbModel = UserAccount.merge(BaseDbModel);

export type UserAccountDbModel = z.infer<typeof UserAccountDbModel>;
