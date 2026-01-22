import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersCreateWithoutGroupInputObjectSchema as GroupUsersCreateWithoutGroupInputObjectSchema } from './GroupUsersCreateWithoutGroupInput.schema';
import { GroupUsersUncheckedCreateWithoutGroupInputObjectSchema as GroupUsersUncheckedCreateWithoutGroupInputObjectSchema } from './GroupUsersUncheckedCreateWithoutGroupInput.schema';
import { GroupUsersCreateOrConnectWithoutGroupInputObjectSchema as GroupUsersCreateOrConnectWithoutGroupInputObjectSchema } from './GroupUsersCreateOrConnectWithoutGroupInput.schema';
import { GroupUsersUpsertWithWhereUniqueWithoutGroupInputObjectSchema as GroupUsersUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './GroupUsersUpsertWithWhereUniqueWithoutGroupInput.schema';
import { GroupUsersCreateManyGroupInputEnvelopeObjectSchema as GroupUsersCreateManyGroupInputEnvelopeObjectSchema } from './GroupUsersCreateManyGroupInputEnvelope.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './GroupUsersWhereUniqueInput.schema';
import { GroupUsersUpdateWithWhereUniqueWithoutGroupInputObjectSchema as GroupUsersUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './GroupUsersUpdateWithWhereUniqueWithoutGroupInput.schema';
import { GroupUsersUpdateManyWithWhereWithoutGroupInputObjectSchema as GroupUsersUpdateManyWithWhereWithoutGroupInputObjectSchema } from './GroupUsersUpdateManyWithWhereWithoutGroupInput.schema';
import { GroupUsersScalarWhereInputObjectSchema as GroupUsersScalarWhereInputObjectSchema } from './GroupUsersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupUsersCreateWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => GroupUsersUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupUsersCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUsersUpsertWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupUsersCreateManyGroupInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GroupUsersWhereUniqueInputObjectSchema), z.lazy(() => GroupUsersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupUsersWhereUniqueInputObjectSchema), z.lazy(() => GroupUsersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupUsersWhereUniqueInputObjectSchema), z.lazy(() => GroupUsersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupUsersWhereUniqueInputObjectSchema), z.lazy(() => GroupUsersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUsersUpdateWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUsersUpdateManyWithWhereWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupUsersScalarWhereInputObjectSchema), z.lazy(() => GroupUsersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUsersUncheckedUpdateManyWithoutGroupNestedInputObjectSchema: z.ZodType<Prisma.GroupUsersUncheckedUpdateManyWithoutGroupNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersUncheckedUpdateManyWithoutGroupNestedInput>;
export const GroupUsersUncheckedUpdateManyWithoutGroupNestedInputObjectZodSchema = makeSchema();
