import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GroupChatOrderByWithRelationInputObjectSchema as GroupChatOrderByWithRelationInputObjectSchema } from './GroupChatOrderByWithRelationInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      group_id: z.uuid().optional(),
      name: SortOrderSchema.optional(),
      created_at: SortOrderSchema.optional(),
      group: z
        .lazy(() => GroupChatOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const GroupUserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GroupUserOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserOrderByWithRelationInput>;
export const GroupUserOrderByWithRelationInputObjectZodSchema = makeSchema();
