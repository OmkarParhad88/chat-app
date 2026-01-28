import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

const groupchatscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => GroupChatScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => GroupChatScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GroupChatScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GroupChatScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => GroupChatScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()])
      .optional(),
    user_id: z
      .union([
        z.lazy(() => IntWithAggregatesFilterObjectSchema),
        z.number().int(),
      ])
      .optional(),
    title: z
      .union([
        z.lazy(() => StringWithAggregatesFilterObjectSchema),
        z.string().max(191),
      ])
      .optional(),
    passcode: z
      .union([
        z.lazy(() => StringWithAggregatesFilterObjectSchema),
        z.string().max(20),
      ])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
  })
  .strict();
export const GroupChatScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GroupChatScalarWhereWithAggregatesInput> =
  groupchatscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GroupChatScalarWhereWithAggregatesInput>;
export const GroupChatScalarWhereWithAggregatesInputObjectZodSchema =
  groupchatscalarwherewithaggregatesinputSchema;
