import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';
import { ChatUpdateWithoutGroupInputObjectSchema as ChatUpdateWithoutGroupInputObjectSchema } from './ChatUpdateWithoutGroupInput.schema';
import { ChatUncheckedUpdateWithoutGroupInputObjectSchema as ChatUncheckedUpdateWithoutGroupInputObjectSchema } from './ChatUncheckedUpdateWithoutGroupInput.schema';
import { ChatCreateWithoutGroupInputObjectSchema as ChatCreateWithoutGroupInputObjectSchema } from './ChatCreateWithoutGroupInput.schema';
import { ChatUncheckedCreateWithoutGroupInputObjectSchema as ChatUncheckedCreateWithoutGroupInputObjectSchema } from './ChatUncheckedCreateWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ChatWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChatUpdateWithoutGroupInputObjectSchema),
        z.lazy(() => ChatUncheckedUpdateWithoutGroupInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ChatCreateWithoutGroupInputObjectSchema),
        z.lazy(() => ChatUncheckedCreateWithoutGroupInputObjectSchema),
      ]),
    })
    .strict();
export const ChatUpsertWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatUpsertWithWhereUniqueWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatUpsertWithWhereUniqueWithoutGroupInput>;
export const ChatUpsertWithWhereUniqueWithoutGroupInputObjectZodSchema =
  makeSchema();
