import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GroupChatScalarRelationFilterObjectSchema as GroupChatScalarRelationFilterObjectSchema } from './GroupChatScalarRelationFilter.schema';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema'

const groupuserswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GroupUsersWhereInputObjectSchema), z.lazy(() => GroupUsersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GroupUsersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GroupUsersWhereInputObjectSchema), z.lazy(() => GroupUsersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  group_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.uuid()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  group: z.union([z.lazy(() => GroupChatScalarRelationFilterObjectSchema), z.lazy(() => GroupChatWhereInputObjectSchema)]).optional()
}).strict();
export const GroupUsersWhereInputObjectSchema: z.ZodType<Prisma.GroupUsersWhereInput> = groupuserswhereinputSchema as unknown as z.ZodType<Prisma.GroupUsersWhereInput>;
export const GroupUsersWhereInputObjectZodSchema = groupuserswhereinputSchema;
