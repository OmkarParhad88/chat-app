import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GroupChatOrderByRelationAggregateInputObjectSchema as GroupChatOrderByRelationAggregateInputObjectSchema } from './GroupChatOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: z.email().optional(),
  provider: SortOrderSchema.optional(),
  image: z.union([z.url(), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  oauth_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  chatGroups: z.lazy(() => GroupChatOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
