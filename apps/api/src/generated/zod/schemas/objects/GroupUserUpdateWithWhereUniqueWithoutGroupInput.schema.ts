import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './GroupUserWhereUniqueInput.schema';
import { GroupUserUpdateWithoutGroupInputObjectSchema as GroupUserUpdateWithoutGroupInputObjectSchema } from './GroupUserUpdateWithoutGroupInput.schema';
import { GroupUserUncheckedUpdateWithoutGroupInputObjectSchema as GroupUserUncheckedUpdateWithoutGroupInputObjectSchema } from './GroupUserUncheckedUpdateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupUserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUserUpdateWithoutGroupInputObjectSchema), z.lazy(() => GroupUserUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
export const GroupUserUpdateWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUserUpdateWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserUpdateWithWhereUniqueWithoutGroupInput>;
export const GroupUserUpdateWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
