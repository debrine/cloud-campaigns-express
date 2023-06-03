import { BaseDbModel } from '../models/base.model';
import { v4 as uuid } from 'uuid';

export const createBaseFactory = () => {
  return BaseDbModel.parse({
    id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    version: 1,
  });
};

export const updateBaseFactory = (base: BaseDbModel) => {
  return BaseDbModel.parse({
    id: base.id,
    createdAt: base.createdAt,
    updatedAt: new Date(),
    deletedAt: base.deletedAt,
    version: base.version + 1,
  });
};
