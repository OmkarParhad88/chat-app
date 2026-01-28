import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './GroupUserWhereUniqueInput.schema';
import { GroupUserUpdateWithoutGroupInputObjectSchema as GroupUserUpdateWithoutGroupInputObjectSchema } from './GroupUserUpdateWithoutGroupInput.schema';
import { GroupUserUncheckedUpdateWithoutGroupInputObjectSchema as GroupUserUncheckedUpdateWithoutGroupInputObjectSchema } from './GroupUserUncheckedUpdateWithoutGroupInput.schema';
import { GroupUserCreateWithoutGroupInputObjectSchema as GroupUserCreateWithoutGroupInputObjectSchema } from './GroupUserCreateWithoutGroupInput.schema';
import { GroupUserUncheckedCreateWithoutGroupInputObjectSchema as GroupUserUncheckedCreateWithoutGroupInputObjectSchema } from './GroupUserUncheckedCreateWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => GroupUserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => GroupUserUpdateWithoutGroupInputObjectSchema),
        z.lazy(() => GroupUserUncheckedUpdateWithoutGroupInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => GroupUserCreateWithoutGroupInputObjectSchema),
        z.lazy(() => GroupUserUncheckedCreateWithoutGroupInputObjectSchema),
      ]),
    })
    .strict();
export const GroupUserUpsertWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUserUpsertWithWhereUniqueWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserUpsertWithWhereUniqueWithoutGroupInput>;
export const GroupUserUpsertWithWhereUniqueWithoutGroupInputObjectZodSchema =
  makeSchema();
