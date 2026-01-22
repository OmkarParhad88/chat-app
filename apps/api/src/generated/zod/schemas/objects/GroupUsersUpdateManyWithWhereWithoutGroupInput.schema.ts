import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersScalarWhereInputObjectSchema as GroupUsersScalarWhereInputObjectSchema } from './GroupUsersScalarWhereInput.schema';
import { GroupUsersUpdateManyMutationInputObjectSchema as GroupUsersUpdateManyMutationInputObjectSchema } from './GroupUsersUpdateManyMutationInput.schema';
import { GroupUsersUncheckedUpdateManyWithoutGroupInputObjectSchema as GroupUsersUncheckedUpdateManyWithoutGroupInputObjectSchema } from './GroupUsersUncheckedUpdateManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupUsersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUsersUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUsersUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
export const GroupUsersUpdateManyWithWhereWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUsersUpdateManyWithWhereWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersUpdateManyWithWhereWithoutGroupInput>;
export const GroupUsersUpdateManyWithWhereWithoutGroupInputObjectZodSchema = makeSchema();
