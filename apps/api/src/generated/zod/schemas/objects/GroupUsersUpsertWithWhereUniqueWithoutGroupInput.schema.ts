import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './GroupUsersWhereUniqueInput.schema';
import { GroupUsersUpdateWithoutGroupInputObjectSchema as GroupUsersUpdateWithoutGroupInputObjectSchema } from './GroupUsersUpdateWithoutGroupInput.schema';
import { GroupUsersUncheckedUpdateWithoutGroupInputObjectSchema as GroupUsersUncheckedUpdateWithoutGroupInputObjectSchema } from './GroupUsersUncheckedUpdateWithoutGroupInput.schema';
import { GroupUsersCreateWithoutGroupInputObjectSchema as GroupUsersCreateWithoutGroupInputObjectSchema } from './GroupUsersCreateWithoutGroupInput.schema';
import { GroupUsersUncheckedCreateWithoutGroupInputObjectSchema as GroupUsersUncheckedCreateWithoutGroupInputObjectSchema } from './GroupUsersUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupUsersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUsersUpdateWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUncheckedUpdateWithoutGroupInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupUsersCreateWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const GroupUsersUpsertWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUsersUpsertWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersUpsertWithWhereUniqueWithoutGroupInput>;
export const GroupUsersUpsertWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
