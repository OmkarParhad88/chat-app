import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GroupChatScalarRelationFilterObjectSchema as GroupChatScalarRelationFilterObjectSchema } from './GroupChatScalarRelationFilter.schema';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema'

const chatwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ChatWhereInputObjectSchema), z.lazy(() => ChatWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChatWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChatWhereInputObjectSchema), z.lazy(() => ChatWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.uuid()]).optional(),
  group_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.uuid()]).optional(),
  message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  file: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  group: z.union([z.lazy(() => GroupChatScalarRelationFilterObjectSchema), z.lazy(() => GroupChatWhereInputObjectSchema)]).optional()
}).strict();
export const ChatWhereInputObjectSchema: z.ZodType<Prisma.ChatWhereInput> = chatwhereinputSchema as unknown as z.ZodType<Prisma.ChatWhereInput>;
export const ChatWhereInputObjectZodSchema = chatwhereinputSchema;
