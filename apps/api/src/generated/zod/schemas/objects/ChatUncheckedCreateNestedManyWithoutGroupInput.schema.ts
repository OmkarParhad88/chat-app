import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatCreateWithoutGroupInputObjectSchema as ChatCreateWithoutGroupInputObjectSchema } from './ChatCreateWithoutGroupInput.schema';
import { ChatUncheckedCreateWithoutGroupInputObjectSchema as ChatUncheckedCreateWithoutGroupInputObjectSchema } from './ChatUncheckedCreateWithoutGroupInput.schema';
import { ChatCreateOrConnectWithoutGroupInputObjectSchema as ChatCreateOrConnectWithoutGroupInputObjectSchema } from './ChatCreateOrConnectWithoutGroupInput.schema';
import { ChatCreateManyGroupInputEnvelopeObjectSchema as ChatCreateManyGroupInputEnvelopeObjectSchema } from './ChatCreateManyGroupInputEnvelope.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChatCreateWithoutGroupInputObjectSchema),
          z.lazy(() => ChatCreateWithoutGroupInputObjectSchema).array(),
          z.lazy(() => ChatUncheckedCreateWithoutGroupInputObjectSchema),
          z
            .lazy(() => ChatUncheckedCreateWithoutGroupInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ChatCreateOrConnectWithoutGroupInputObjectSchema),
          z
            .lazy(() => ChatCreateOrConnectWithoutGroupInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ChatCreateManyGroupInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChatWhereUniqueInputObjectSchema),
          z.lazy(() => ChatWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatUncheckedCreateNestedManyWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatUncheckedCreateNestedManyWithoutGroupInput>;
export const ChatUncheckedCreateNestedManyWithoutGroupInputObjectZodSchema =
  makeSchema();
