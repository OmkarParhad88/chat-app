import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateNestedOneWithoutChatsInputObjectSchema as GroupChatCreateNestedOneWithoutChatsInputObjectSchema } from './GroupChatCreateNestedOneWithoutChatsInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  message: z.string().optional().nullable(),
  name: z.string(),
  file: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  group: z.lazy(() => GroupChatCreateNestedOneWithoutChatsInputObjectSchema)
}).strict();
export const ChatsCreateInputObjectSchema: z.ZodType<Prisma.ChatsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsCreateInput>;
export const ChatsCreateInputObjectZodSchema = makeSchema();
