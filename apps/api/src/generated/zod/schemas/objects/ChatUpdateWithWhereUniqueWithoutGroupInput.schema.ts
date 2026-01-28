import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';
import { ChatUpdateWithoutGroupInputObjectSchema as ChatUpdateWithoutGroupInputObjectSchema } from './ChatUpdateWithoutGroupInput.schema';
import { ChatUncheckedUpdateWithoutGroupInputObjectSchema as ChatUncheckedUpdateWithoutGroupInputObjectSchema } from './ChatUncheckedUpdateWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ChatWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatUpdateWithoutGroupInputObjectSchema),
        z.lazy(() => ChatUncheckedUpdateWithoutGroupInputObjectSchema),
      ]),
    })
    .strict();
export const ChatUpdateWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatUpdateWithWhereUniqueWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatUpdateWithWhereUniqueWithoutGroupInput>;
export const ChatUpdateWithWhereUniqueWithoutGroupInputObjectZodSchema =
  makeSchema();
