import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './GroupUsersWhereUniqueInput.schema';
import { GroupUsersUpdateWithoutGroupInputObjectSchema as GroupUsersUpdateWithoutGroupInputObjectSchema } from './GroupUsersUpdateWithoutGroupInput.schema';
import { GroupUsersUncheckedUpdateWithoutGroupInputObjectSchema as GroupUsersUncheckedUpdateWithoutGroupInputObjectSchema } from './GroupUsersUncheckedUpdateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupUsersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUsersUpdateWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
export const GroupUsersUpdateWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUsersUpdateWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersUpdateWithWhereUniqueWithoutGroupInput>;
export const GroupUsersUpdateWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
