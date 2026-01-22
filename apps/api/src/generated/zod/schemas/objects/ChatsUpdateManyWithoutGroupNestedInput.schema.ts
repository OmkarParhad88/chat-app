import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsCreateWithoutGroupInputObjectSchema as ChatsCreateWithoutGroupInputObjectSchema } from './ChatsCreateWithoutGroupInput.schema';
import { ChatsUncheckedCreateWithoutGroupInputObjectSchema as ChatsUncheckedCreateWithoutGroupInputObjectSchema } from './ChatsUncheckedCreateWithoutGroupInput.schema';
import { ChatsCreateOrConnectWithoutGroupInputObjectSchema as ChatsCreateOrConnectWithoutGroupInputObjectSchema } from './ChatsCreateOrConnectWithoutGroupInput.schema';
import { ChatsUpsertWithWhereUniqueWithoutGroupInputObjectSchema as ChatsUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './ChatsUpsertWithWhereUniqueWithoutGroupInput.schema';
import { ChatsCreateManyGroupInputEnvelopeObjectSchema as ChatsCreateManyGroupInputEnvelopeObjectSchema } from './ChatsCreateManyGroupInputEnvelope.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './ChatsWhereUniqueInput.schema';
import { ChatsUpdateWithWhereUniqueWithoutGroupInputObjectSchema as ChatsUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './ChatsUpdateWithWhereUniqueWithoutGroupInput.schema';
import { ChatsUpdateManyWithWhereWithoutGroupInputObjectSchema as ChatsUpdateManyWithWhereWithoutGroupInputObjectSchema } from './ChatsUpdateManyWithWhereWithoutGroupInput.schema';
import { ChatsScalarWhereInputObjectSchema as ChatsScalarWhereInputObjectSchema } from './ChatsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChatsCreateWithoutGroupInputObjectSchema), z.lazy(() => ChatsCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => ChatsUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => ChatsUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChatsCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => ChatsCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChatsUpsertWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => ChatsUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChatsCreateManyGroupInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChatsWhereUniqueInputObjectSchema), z.lazy(() => ChatsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChatsWhereUniqueInputObjectSchema), z.lazy(() => ChatsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChatsWhereUniqueInputObjectSchema), z.lazy(() => ChatsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChatsWhereUniqueInputObjectSchema), z.lazy(() => ChatsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChatsUpdateWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => ChatsUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChatsUpdateManyWithWhereWithoutGroupInputObjectSchema), z.lazy(() => ChatsUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChatsScalarWhereInputObjectSchema), z.lazy(() => ChatsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChatsUpdateManyWithoutGroupNestedInputObjectSchema: z.ZodType<Prisma.ChatsUpdateManyWithoutGroupNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsUpdateManyWithoutGroupNestedInput>;
export const ChatsUpdateManyWithoutGroupNestedInputObjectZodSchema = makeSchema();
