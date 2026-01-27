import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ChatListRelationFilterObjectSchema as ChatListRelationFilterObjectSchema } from './ChatListRelationFilter.schema';
import { GroupUserListRelationFilterObjectSchema as GroupUserListRelationFilterObjectSchema } from './GroupUserListRelationFilter.schema'

const groupchatwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GroupChatWhereInputObjectSchema), z.lazy(() => GroupChatWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GroupChatWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GroupChatWhereInputObjectSchema), z.lazy(() => GroupChatWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.uuid()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(191)]).optional(),
  passcode: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  Chats: z.lazy(() => ChatListRelationFilterObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUserListRelationFilterObjectSchema).optional()
}).strict();
export const GroupChatWhereInputObjectSchema: z.ZodType<Prisma.GroupChatWhereInput> = groupchatwhereinputSchema as unknown as z.ZodType<Prisma.GroupChatWhereInput>;
export const GroupChatWhereInputObjectZodSchema = groupchatwhereinputSchema;
