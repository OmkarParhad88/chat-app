import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.uuid().optional()
}).strict();
export const ChatsWhereUniqueInputObjectSchema: z.ZodType<Prisma.ChatsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsWhereUniqueInput>;
export const ChatsWhereUniqueInputObjectZodSchema = makeSchema();
