import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const groupusersscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GroupUsersScalarWhereInputObjectSchema), z.lazy(() => GroupUsersScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GroupUsersScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GroupUsersScalarWhereInputObjectSchema), z.lazy(() => GroupUsersScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  group_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GroupUsersScalarWhereInputObjectSchema: z.ZodType<Prisma.GroupUsersScalarWhereInput> = groupusersscalarwhereinputSchema as unknown as z.ZodType<Prisma.GroupUsersScalarWhereInput>;
export const GroupUsersScalarWhereInputObjectZodSchema = groupusersscalarwhereinputSchema;
