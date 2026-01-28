import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatSelectObjectSchema as GroupChatSelectObjectSchema } from './GroupChatSelect.schema';
import { GroupChatIncludeObjectSchema as GroupChatIncludeObjectSchema } from './GroupChatInclude.schema';

const makeSchema = () =>
  z
    .object({
      select: z.lazy(() => GroupChatSelectObjectSchema).optional(),
      include: z.lazy(() => GroupChatIncludeObjectSchema).optional(),
    })
    .strict();
export const GroupChatArgsObjectSchema = makeSchema();
export const GroupChatArgsObjectZodSchema = makeSchema();
