import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ChatsOrderByRelationAggregateInputObjectSchema as ChatsOrderByRelationAggregateInputObjectSchema } from './ChatsOrderByRelationAggregateInput.schema';
import { GroupUsersOrderByRelationAggregateInputObjectSchema as GroupUsersOrderByRelationAggregateInputObjectSchema } from './GroupUsersOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  user_id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  passcode: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  Chats: z.lazy(() => ChatsOrderByRelationAggregateInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUsersOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const GroupChatOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GroupChatOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatOrderByWithRelationInput>;
export const GroupChatOrderByWithRelationInputObjectZodSchema = makeSchema();
