import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateWithoutUserInputObjectSchema as GroupChatCreateWithoutUserInputObjectSchema } from './GroupChatCreateWithoutUserInput.schema';
import { GroupChatUncheckedCreateWithoutUserInputObjectSchema as GroupChatUncheckedCreateWithoutUserInputObjectSchema } from './GroupChatUncheckedCreateWithoutUserInput.schema';
import { GroupChatCreateOrConnectWithoutUserInputObjectSchema as GroupChatCreateOrConnectWithoutUserInputObjectSchema } from './GroupChatCreateOrConnectWithoutUserInput.schema';
import { GroupChatUpsertWithWhereUniqueWithoutUserInputObjectSchema as GroupChatUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './GroupChatUpsertWithWhereUniqueWithoutUserInput.schema';
import { GroupChatCreateManyUserInputEnvelopeObjectSchema as GroupChatCreateManyUserInputEnvelopeObjectSchema } from './GroupChatCreateManyUserInputEnvelope.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';
import { GroupChatUpdateWithWhereUniqueWithoutUserInputObjectSchema as GroupChatUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './GroupChatUpdateWithWhereUniqueWithoutUserInput.schema';
import { GroupChatUpdateManyWithWhereWithoutUserInputObjectSchema as GroupChatUpdateManyWithWhereWithoutUserInputObjectSchema } from './GroupChatUpdateManyWithWhereWithoutUserInput.schema';
import { GroupChatScalarWhereInputObjectSchema as GroupChatScalarWhereInputObjectSchema } from './GroupChatScalarWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => GroupChatCreateWithoutUserInputObjectSchema),
          z.lazy(() => GroupChatCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => GroupChatUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => GroupChatUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GroupChatCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => GroupChatCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => GroupChatUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => GroupChatUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => GroupChatCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
          z.lazy(() => GroupChatWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
          z.lazy(() => GroupChatWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
          z.lazy(() => GroupChatWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
          z.lazy(() => GroupChatWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => GroupChatUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => GroupChatUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => GroupChatUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => GroupChatUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => GroupChatScalarWhereInputObjectSchema),
          z.lazy(() => GroupChatScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const GroupChatUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateManyWithoutUserNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateManyWithoutUserNestedInput>;
export const GroupChatUpdateManyWithoutUserNestedInputObjectZodSchema =
  makeSchema();
