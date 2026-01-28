import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatScalarWhereInputObjectSchema as GroupChatScalarWhereInputObjectSchema } from './GroupChatScalarWhereInput.schema';
import { GroupChatUpdateManyMutationInputObjectSchema as GroupChatUpdateManyMutationInputObjectSchema } from './GroupChatUpdateManyMutationInput.schema';
import { GroupChatUncheckedUpdateManyWithoutUserInputObjectSchema as GroupChatUncheckedUpdateManyWithoutUserInputObjectSchema } from './GroupChatUncheckedUpdateManyWithoutUserInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => GroupChatScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => GroupChatUpdateManyMutationInputObjectSchema),
        z.lazy(() => GroupChatUncheckedUpdateManyWithoutUserInputObjectSchema),
      ]),
    })
    .strict();
export const GroupChatUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateManyWithWhereWithoutUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateManyWithWhereWithoutUserInput>;
export const GroupChatUpdateManyWithWhereWithoutUserInputObjectZodSchema =
  makeSchema();
