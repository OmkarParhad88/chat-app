import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
    })
    .strict();
export const GroupChatWhereUniqueInputObjectSchema: z.ZodType<Prisma.GroupChatWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatWhereUniqueInput>;
export const GroupChatWhereUniqueInputObjectZodSchema = makeSchema();
