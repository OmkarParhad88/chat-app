import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './GroupUsersWhereUniqueInput.schema';
import { GroupUsersCreateWithoutGroupInputObjectSchema as GroupUsersCreateWithoutGroupInputObjectSchema } from './GroupUsersCreateWithoutGroupInput.schema';
import { GroupUsersUncheckedCreateWithoutGroupInputObjectSchema as GroupUsersUncheckedCreateWithoutGroupInputObjectSchema } from './GroupUsersUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupUsersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupUsersCreateWithoutGroupInputObjectSchema), z.lazy(() => GroupUsersUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const GroupUsersCreateOrConnectWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUsersCreateOrConnectWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersCreateOrConnectWithoutGroupInput>;
export const GroupUsersCreateOrConnectWithoutGroupInputObjectZodSchema = makeSchema();
