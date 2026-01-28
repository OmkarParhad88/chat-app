import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatScalarWhereInputObjectSchema as ChatScalarWhereInputObjectSchema } from './ChatScalarWhereInput.schema';
import { ChatUpdateManyMutationInputObjectSchema as ChatUpdateManyMutationInputObjectSchema } from './ChatUpdateManyMutationInput.schema';
import { ChatUncheckedUpdateManyWithoutGroupInputObjectSchema as ChatUncheckedUpdateManyWithoutGroupInputObjectSchema } from './ChatUncheckedUpdateManyWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ChatScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatUpdateManyMutationInputObjectSchema),
        z.lazy(() => ChatUncheckedUpdateManyWithoutGroupInputObjectSchema),
      ]),
    })
    .strict();
export const ChatUpdateManyWithWhereWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatUpdateManyWithWhereWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatUpdateManyWithWhereWithoutGroupInput>;
export const ChatUpdateManyWithWhereWithoutGroupInputObjectZodSchema =
  makeSchema();
