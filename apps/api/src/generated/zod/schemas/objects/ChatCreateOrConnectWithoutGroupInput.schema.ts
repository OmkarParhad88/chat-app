import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';
import { ChatCreateWithoutGroupInputObjectSchema as ChatCreateWithoutGroupInputObjectSchema } from './ChatCreateWithoutGroupInput.schema';
import { ChatUncheckedCreateWithoutGroupInputObjectSchema as ChatUncheckedCreateWithoutGroupInputObjectSchema } from './ChatUncheckedCreateWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ChatWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ChatCreateWithoutGroupInputObjectSchema),
        z.lazy(() => ChatUncheckedCreateWithoutGroupInputObjectSchema),
      ]),
    })
    .strict();
export const ChatCreateOrConnectWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatCreateOrConnectWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatCreateOrConnectWithoutGroupInput>;
export const ChatCreateOrConnectWithoutGroupInputObjectZodSchema = makeSchema();
