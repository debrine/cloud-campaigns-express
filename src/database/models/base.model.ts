import { z } from 'zod';
import { v4 as uuid } from 'uuid';

export const BaseDbModel = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date().default(() => new Date()),
  updatedAt: z.coerce.date().default(() => new Date()),
  deletedAt: z.date().nullable().default(null),
  version: z.number().default(1),
});

export type BaseDbModel = z.infer<typeof BaseDbModel>;
