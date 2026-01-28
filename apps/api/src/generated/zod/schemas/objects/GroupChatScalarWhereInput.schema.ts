import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

const groupchatscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => GroupChatScalarWhereInputObjectSchema),
        z.lazy(() => GroupChatScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GroupChatScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GroupChatScalarWhereInputObjectSchema),
        z.lazy(() => GroupChatScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    passcode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();
export const GroupChatScalarWhereInputObjectSchema: z.ZodType<Prisma.GroupChatScalarWhereInput> =
  groupchatscalarwhereinputSchema as unknown as z.ZodType<Prisma.GroupChatScalarWhereInput>;
export const GroupChatScalarWhereInputObjectZodSchema =
  groupchatscalarwhereinputSchema;
