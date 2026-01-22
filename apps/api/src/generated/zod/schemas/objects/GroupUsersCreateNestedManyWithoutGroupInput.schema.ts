import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersCreateWithoutGroupInputObjectSchema as GroupUsersCreateWithoutGroupInputObjectSchema } from './GroupUsersCreateWithoutGroupInput.schema';
import { GroupUsersUncheckedCreateWithoutGroupInputObjectSchema as GroupUsersUncheckedCreateWithoutGroupInputObjectSchema } from './GroupUsersUncheckedCreateWithoutGroupInput.schema';
import { GroupUsersCreateOrConnectWithoutGroupInputObjectSchema as GroupUsersCreateOrConnectWithoutGroupInputObjectSchema } from './GroupUsersCreateOrConnectWithoutGroupInput.schema';
import { GroupUsersCreateManyGroupInputEnvelopeObjectSchema as GroupUsersCreateManyGroupInputEnvelopeObjectSchema } from './GroupUsersCreateManyGroupInputEnvelope.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './GroupUsersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupUsersCreateWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => GroupUsersUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupUsersCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupUsersCreateManyGroupInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GroupUsersWhereUniqueInputObjectSchema), z.lazy(() => GroupUsersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupUsersCreateNestedManyWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUsersCreateNestedManyWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersCreateNestedManyWithoutGroupInput>;
export const GroupUsersCreateNestedManyWithoutGroupInputObjectZodSchema = makeSchema();
