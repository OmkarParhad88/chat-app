import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const chatscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ChatScalarWhereInputObjectSchema), z.lazy(() => ChatScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChatScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChatScalarWhereInputObjectSchema), z.lazy(() => ChatScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  group_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  file: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ChatScalarWhereInputObjectSchema: z.ZodType<Prisma.ChatScalarWhereInput> = chatscalarwhereinputSchema as unknown as z.ZodType<Prisma.ChatScalarWhereInput>;
export const ChatScalarWhereInputObjectZodSchema = chatscalarwhereinputSchema;
