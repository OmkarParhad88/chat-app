import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

const groupuserscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => GroupUserScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => GroupUserScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GroupUserScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GroupUserScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => GroupUserScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([
        z.lazy(() => IntWithAggregatesFilterObjectSchema),
        z.number().int(),
      ])
      .optional(),
    group_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
  })
  .strict();
export const GroupUserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GroupUserScalarWhereWithAggregatesInput> =
  groupuserscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GroupUserScalarWhereWithAggregatesInput>;
export const GroupUserScalarWhereWithAggregatesInputObjectZodSchema =
  groupuserscalarwherewithaggregatesinputSchema;
