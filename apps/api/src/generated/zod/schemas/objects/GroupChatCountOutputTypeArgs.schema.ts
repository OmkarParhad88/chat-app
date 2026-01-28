import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCountOutputTypeSelectObjectSchema as GroupChatCountOutputTypeSelectObjectSchema } from './GroupChatCountOutputTypeSelect.schema';

const makeSchema = () =>
  z
    .object({
      select: z
        .lazy(() => GroupChatCountOutputTypeSelectObjectSchema)
        .optional(),
    })
    .strict();
export const GroupChatCountOutputTypeArgsObjectSchema = makeSchema();
export const GroupChatCountOutputTypeArgsObjectZodSchema = makeSchema();
