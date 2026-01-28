import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './objects/GroupChatWhereInput.schema';

export const GroupChatDeleteManySchema: z.ZodType<Prisma.GroupChatDeleteManyArgs> =
  z
    .object({ where: GroupChatWhereInputObjectSchema.optional() })
    .strict() as unknown as z.ZodType<Prisma.GroupChatDeleteManyArgs>;

export const GroupChatDeleteManyZodSchema = z
  .object({ where: GroupChatWhereInputObjectSchema.optional() })
  .strict();
