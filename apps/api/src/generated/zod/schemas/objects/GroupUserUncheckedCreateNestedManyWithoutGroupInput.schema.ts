import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserCreateWithoutGroupInputObjectSchema as GroupUserCreateWithoutGroupInputObjectSchema } from './GroupUserCreateWithoutGroupInput.schema';
import { GroupUserUncheckedCreateWithoutGroupInputObjectSchema as GroupUserUncheckedCreateWithoutGroupInputObjectSchema } from './GroupUserUncheckedCreateWithoutGroupInput.schema';
import { GroupUserCreateOrConnectWithoutGroupInputObjectSchema as GroupUserCreateOrConnectWithoutGroupInputObjectSchema } from './GroupUserCreateOrConnectWithoutGroupInput.schema';
import { GroupUserCreateManyGroupInputEnvelopeObjectSchema as GroupUserCreateManyGroupInputEnvelopeObjectSchema } from './GroupUserCreateManyGroupInputEnvelope.schema';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './GroupUserWhereUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => GroupUserCreateWithoutGroupInputObjectSchema),
          z.lazy(() => GroupUserCreateWithoutGroupInputObjectSchema).array(),
          z.lazy(() => GroupUserUncheckedCreateWithoutGroupInputObjectSchema),
          z
            .lazy(() => GroupUserUncheckedCreateWithoutGroupInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GroupUserCreateOrConnectWithoutGroupInputObjectSchema),
          z
            .lazy(() => GroupUserCreateOrConnectWithoutGroupInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => GroupUserCreateManyGroupInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => GroupUserWhereUniqueInputObjectSchema),
          z.lazy(() => GroupUserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUserUncheckedCreateNestedManyWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserUncheckedCreateNestedManyWithoutGroupInput>;
export const GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectZodSchema =
  makeSchema();
