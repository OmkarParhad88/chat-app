import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ChatOrderByRelationAggregateInputObjectSchema as ChatOrderByRelationAggregateInputObjectSchema } from './ChatOrderByRelationAggregateInput.schema';
import { GroupUserOrderByRelationAggregateInputObjectSchema as GroupUserOrderByRelationAggregateInputObjectSchema } from './GroupUserOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  user_id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  passcode: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  Chats: z.lazy(() => ChatOrderByRelationAggregateInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const GroupChatOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GroupChatOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatOrderByWithRelationInput>;
export const GroupChatOrderByWithRelationInputObjectZodSchema = makeSchema();
