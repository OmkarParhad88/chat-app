import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './ChatsWhereUniqueInput.schema';
import { ChatsCreateWithoutGroupInputObjectSchema as ChatsCreateWithoutGroupInputObjectSchema } from './ChatsCreateWithoutGroupInput.schema';
import { ChatsUncheckedCreateWithoutGroupInputObjectSchema as ChatsUncheckedCreateWithoutGroupInputObjectSchema } from './ChatsUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChatsCreateWithoutGroupInputObjectSchema), z.lazy(() => ChatsUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const ChatsCreateOrConnectWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatsCreateOrConnectWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsCreateOrConnectWithoutGroupInput>;
export const ChatsCreateOrConnectWithoutGroupInputObjectZodSchema = makeSchema();
