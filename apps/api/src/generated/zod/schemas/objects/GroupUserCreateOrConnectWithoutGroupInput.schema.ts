import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './GroupUserWhereUniqueInput.schema';
import { GroupUserCreateWithoutGroupInputObjectSchema as GroupUserCreateWithoutGroupInputObjectSchema } from './GroupUserCreateWithoutGroupInput.schema';
import { GroupUserUncheckedCreateWithoutGroupInputObjectSchema as GroupUserUncheckedCreateWithoutGroupInputObjectSchema } from './GroupUserUncheckedCreateWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => GroupUserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => GroupUserCreateWithoutGroupInputObjectSchema),
        z.lazy(() => GroupUserUncheckedCreateWithoutGroupInputObjectSchema),
      ]),
    })
    .strict();
export const GroupUserCreateOrConnectWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUserCreateOrConnectWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserCreateOrConnectWithoutGroupInput>;
export const GroupUserCreateOrConnectWithoutGroupInputObjectZodSchema =
  makeSchema();
