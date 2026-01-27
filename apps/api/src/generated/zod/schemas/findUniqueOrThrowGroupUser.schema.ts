import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserSelectObjectSchema as GroupUserSelectObjectSchema } from './objects/GroupUserSelect.schema';
import { GroupUserIncludeObjectSchema as GroupUserIncludeObjectSchema } from './objects/GroupUserInclude.schema';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './objects/GroupUserWhereUniqueInput.schema';

export const GroupUserFindUniqueOrThrowSchema: z.ZodType<Prisma.GroupUserFindUniqueOrThrowArgs> = z.object({ select: GroupUserSelectObjectSchema.optional(), include: GroupUserIncludeObjectSchema.optional(), where: GroupUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupUserFindUniqueOrThrowArgs>;

export const GroupUserFindUniqueOrThrowZodSchema = z.object({ select: GroupUserSelectObjectSchema.optional(), include: GroupUserIncludeObjectSchema.optional(), where: GroupUserWhereUniqueInputObjectSchema }).strict();