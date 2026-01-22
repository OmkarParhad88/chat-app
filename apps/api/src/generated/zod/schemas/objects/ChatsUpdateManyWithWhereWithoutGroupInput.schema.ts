import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsScalarWhereInputObjectSchema as ChatsScalarWhereInputObjectSchema } from './ChatsScalarWhereInput.schema';
import { ChatsUpdateManyMutationInputObjectSchema as ChatsUpdateManyMutationInputObjectSchema } from './ChatsUpdateManyMutationInput.schema';
import { ChatsUncheckedUpdateManyWithoutGroupInputObjectSchema as ChatsUncheckedUpdateManyWithoutGroupInputObjectSchema } from './ChatsUncheckedUpdateManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ChatsUpdateManyMutationInputObjectSchema), z.lazy(() => ChatsUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
export const ChatsUpdateManyWithWhereWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatsUpdateManyWithWhereWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsUpdateManyWithWhereWithoutGroupInput>;
export const ChatsUpdateManyWithWhereWithoutGroupInputObjectZodSchema = makeSchema();
