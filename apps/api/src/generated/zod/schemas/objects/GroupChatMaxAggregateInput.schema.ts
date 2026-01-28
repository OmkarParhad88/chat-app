import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      user_id: z.literal(true).optional(),
      title: z.literal(true).optional(),
      passcode: z.literal(true).optional(),
      created_at: z.literal(true).optional(),
    })
    .strict();
export const GroupChatMaxAggregateInputObjectSchema: z.ZodType<Prisma.GroupChatMaxAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatMaxAggregateInputType>;
export const GroupChatMaxAggregateInputObjectZodSchema = makeSchema();
