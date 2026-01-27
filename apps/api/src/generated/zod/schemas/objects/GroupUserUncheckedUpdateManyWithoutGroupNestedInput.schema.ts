import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserCreateWithoutGroupInputObjectSchema as GroupUserCreateWithoutGroupInputObjectSchema } from './GroupUserCreateWithoutGroupInput.schema';
import { GroupUserUncheckedCreateWithoutGroupInputObjectSchema as GroupUserUncheckedCreateWithoutGroupInputObjectSchema } from './GroupUserUncheckedCreateWithoutGroupInput.schema';
import { GroupUserCreateOrConnectWithoutGroupInputObjectSchema as GroupUserCreateOrConnectWithoutGroupInputObjectSchema } from './GroupUserCreateOrConnectWithoutGroupInput.schema';
import { GroupUserUpsertWithWhereUniqueWithoutGroupInputObjectSchema as GroupUserUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './GroupUserUpsertWithWhereUniqueWithoutGroupInput.schema';
import { GroupUserCreateManyGroupInputEnvelopeObjectSchema as GroupUserCreateManyGroupInputEnvelopeObjectSchema } from './GroupUserCreateManyGroupInputEnvelope.schema';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './GroupUserWhereUniqueInput.schema';
import { GroupUserUpdateWithWhereUniqueWithoutGroupInputObjectSchema as GroupUserUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './GroupUserUpdateWithWhereUniqueWithoutGroupInput.schema';
import { GroupUserUpdateManyWithWhereWithoutGroupInputObjectSchema as GroupUserUpdateManyWithWhereWithoutGroupInputObjectSchema } from './GroupUserUpdateManyWithWhereWithoutGroupInput.schema';
import { GroupUserScalarWhereInputObjectSchema as GroupUserScalarWhereInputObjectSchema } from './GroupUserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupUserCreateWithoutGroupInputObjectSchema), z.lazy(() => GroupUserCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => GroupUserUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => GroupUserUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupUserCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => GroupUserCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUserUpsertWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => GroupUserUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupUserCreateManyGroupInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GroupUserWhereUniqueInputObjectSchema), z.lazy(() => GroupUserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupUserWhereUniqueInputObjectSchema), z.lazy(() => GroupUserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupUserWhereUniqueInputObjectSchema), z.lazy(() => GroupUserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupUserWhereUniqueInputObjectSchema), z.lazy(() => GroupUserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUserUpdateWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => GroupUserUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUserUpdateManyWithWhereWithoutGroupInputObjectSchema), z.lazy(() => GroupUserUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupUserScalarWhereInputObjectSchema), z.lazy(() => GroupUserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema: z.ZodType<Prisma.GroupUserUncheckedUpdateManyWithoutGroupNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserUncheckedUpdateManyWithoutGroupNestedInput>;
export const GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectZodSchema = makeSchema();
