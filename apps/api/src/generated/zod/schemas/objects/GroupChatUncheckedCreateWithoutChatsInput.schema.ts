import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema as GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUserUncheckedCreateNestedManyWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      user_id: z.number().int(),
      title: z.string(),
      passcode: z.string(),
      created_at: z.coerce.date().optional(),
      GroupUsers: z
        .lazy(
          () => GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const GroupChatUncheckedCreateWithoutChatsInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedCreateWithoutChatsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedCreateWithoutChatsInput>;
export const GroupChatUncheckedCreateWithoutChatsInputObjectZodSchema =
  makeSchema();
