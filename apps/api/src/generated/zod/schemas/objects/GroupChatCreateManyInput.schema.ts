import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.uuid().optional(),
  user_id: z.number().int(),
  title: z.string().max(191),
  passcode: z.string().max(20),
  created_at: z.coerce.date().optional()
}).strict();
export const GroupChatCreateManyInputObjectSchema: z.ZodType<Prisma.GroupChatCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateManyInput>;
export const GroupChatCreateManyInputObjectZodSchema = makeSchema();
