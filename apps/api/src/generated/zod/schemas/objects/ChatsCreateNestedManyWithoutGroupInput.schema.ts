import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsCreateWithoutGroupInputObjectSchema as ChatsCreateWithoutGroupInputObjectSchema } from './ChatsCreateWithoutGroupInput.schema';
import { ChatsUncheckedCreateWithoutGroupInputObjectSchema as ChatsUncheckedCreateWithoutGroupInputObjectSchema } from './ChatsUncheckedCreateWithoutGroupInput.schema';
import { ChatsCreateOrConnectWithoutGroupInputObjectSchema as ChatsCreateOrConnectWithoutGroupInputObjectSchema } from './ChatsCreateOrConnectWithoutGroupInput.schema';
import { ChatsCreateManyGroupInputEnvelopeObjectSchema as ChatsCreateManyGroupInputEnvelopeObjectSchema } from './ChatsCreateManyGroupInputEnvelope.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './ChatsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChatsCreateWithoutGroupInputObjectSchema), z.lazy(() => ChatsCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => ChatsUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => ChatsUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChatsCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => ChatsCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChatsCreateManyGroupInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ChatsWhereUniqueInputObjectSchema), z.lazy(() => ChatsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ChatsCreateNestedManyWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatsCreateNestedManyWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsCreateNestedManyWithoutGroupInput>;
export const ChatsCreateNestedManyWithoutGroupInputObjectZodSchema = makeSchema();
