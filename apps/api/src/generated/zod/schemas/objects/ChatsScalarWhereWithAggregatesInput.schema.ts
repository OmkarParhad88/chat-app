import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const chatsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ChatsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ChatsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChatsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChatsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ChatsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.uuid()]).optional(),
  group_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()]).optional(),
  message: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  file: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ChatsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ChatsScalarWhereWithAggregatesInput> = chatsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ChatsScalarWhereWithAggregatesInput>;
export const ChatsScalarWhereWithAggregatesInputObjectZodSchema = chatsscalarwherewithaggregatesinputSchema;
