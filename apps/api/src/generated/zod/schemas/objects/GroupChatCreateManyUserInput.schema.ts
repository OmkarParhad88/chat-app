import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.uuid().optional(),
  title: z.string().max(191),
  passcode: z.string().max(20),
  created_at: z.coerce.date().optional()
}).strict();
export const GroupChatCreateManyUserInputObjectSchema: z.ZodType<Prisma.GroupChatCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateManyUserInput>;
export const GroupChatCreateManyUserInputObjectZodSchema = makeSchema();
