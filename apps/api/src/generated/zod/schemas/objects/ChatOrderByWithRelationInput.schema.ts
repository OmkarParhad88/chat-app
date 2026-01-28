import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GroupChatOrderByWithRelationInputObjectSchema as GroupChatOrderByWithRelationInputObjectSchema } from './GroupChatOrderByWithRelationInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      group_id: z.uuid().optional(),
      message: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      name: SortOrderSchema.optional(),
      file: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      created_at: SortOrderSchema.optional(),
      group: z
        .lazy(() => GroupChatOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const ChatOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ChatOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatOrderByWithRelationInput>;
export const ChatOrderByWithRelationInputObjectZodSchema = makeSchema();
