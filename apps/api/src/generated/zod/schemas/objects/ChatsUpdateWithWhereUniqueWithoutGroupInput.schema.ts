import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './ChatsWhereUniqueInput.schema';
import { ChatsUpdateWithoutGroupInputObjectSchema as ChatsUpdateWithoutGroupInputObjectSchema } from './ChatsUpdateWithoutGroupInput.schema';
import { ChatsUncheckedUpdateWithoutGroupInputObjectSchema as ChatsUncheckedUpdateWithoutGroupInputObjectSchema } from './ChatsUncheckedUpdateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ChatsUpdateWithoutGroupInputObjectSchema), z.lazy(() => ChatsUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
export const ChatsUpdateWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatsUpdateWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsUpdateWithWhereUniqueWithoutGroupInput>;
export const ChatsUpdateWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
