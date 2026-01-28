import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateNestedOneWithoutGroupUsersInputObjectSchema as GroupChatCreateNestedOneWithoutGroupUsersInputObjectSchema } from './GroupChatCreateNestedOneWithoutGroupUsersInput.schema';

const makeSchema = () =>
  z
    .object({
      name: z.string(),
      created_at: z.coerce.date().optional(),
      group: z.lazy(
        () => GroupChatCreateNestedOneWithoutGroupUsersInputObjectSchema,
      ),
    })
    .strict();
export const GroupUserCreateInputObjectSchema: z.ZodType<Prisma.GroupUserCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserCreateInput>;
export const GroupUserCreateInputObjectZodSchema = makeSchema();
