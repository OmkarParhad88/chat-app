import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatArgsObjectSchema as GroupChatArgsObjectSchema } from './GroupChatArgs.schema';

const makeSchema = () =>
  z
    .object({
      id: z.boolean().optional(),
      group: z
        .union([z.boolean(), z.lazy(() => GroupChatArgsObjectSchema)])
        .optional(),
      group_id: z.boolean().optional(),
      name: z.boolean().optional(),
      created_at: z.boolean().optional(),
    })
    .strict();
export const GroupUserSelectObjectSchema: z.ZodType<Prisma.GroupUserSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserSelect>;
export const GroupUserSelectObjectZodSchema = makeSchema();
