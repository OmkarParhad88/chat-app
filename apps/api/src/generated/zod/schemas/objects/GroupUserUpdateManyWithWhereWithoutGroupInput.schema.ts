import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserScalarWhereInputObjectSchema as GroupUserScalarWhereInputObjectSchema } from './GroupUserScalarWhereInput.schema';
import { GroupUserUpdateManyMutationInputObjectSchema as GroupUserUpdateManyMutationInputObjectSchema } from './GroupUserUpdateManyMutationInput.schema';
import { GroupUserUncheckedUpdateManyWithoutGroupInputObjectSchema as GroupUserUncheckedUpdateManyWithoutGroupInputObjectSchema } from './GroupUserUncheckedUpdateManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupUserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUserUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUserUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
export const GroupUserUpdateManyWithWhereWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUserUpdateManyWithWhereWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserUpdateManyWithWhereWithoutGroupInput>;
export const GroupUserUpdateManyWithWhereWithoutGroupInputObjectZodSchema = makeSchema();
