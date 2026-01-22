import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './ChatsWhereUniqueInput.schema';
import { ChatsUpdateWithoutGroupInputObjectSchema as ChatsUpdateWithoutGroupInputObjectSchema } from './ChatsUpdateWithoutGroupInput.schema';
import { ChatsUncheckedUpdateWithoutGroupInputObjectSchema as ChatsUncheckedUpdateWithoutGroupInputObjectSchema } from './ChatsUncheckedUpdateWithoutGroupInput.schema';
import { ChatsCreateWithoutGroupInputObjectSchema as ChatsCreateWithoutGroupInputObjectSchema } from './ChatsCreateWithoutGroupInput.schema';
import { ChatsUncheckedCreateWithoutGroupInputObjectSchema as ChatsUncheckedCreateWithoutGroupInputObjectSchema } from './ChatsUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ChatsUpdateWithoutGroupInputObjectSchema), z.lazy(() => ChatsUncheckedUpdateWithoutGroupInputObjectSchema)]),
  create: z.union([z.lazy(() => ChatsCreateWithoutGroupInputObjectSchema), z.lazy(() => ChatsUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const ChatsUpsertWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatsUpsertWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsUpsertWithWhereUniqueWithoutGroupInput>;
export const ChatsUpsertWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
