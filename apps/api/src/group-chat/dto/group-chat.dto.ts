import z from 'zod';
import { createZodDto } from 'nestjs-zod';
import { GroupChatCreateInputObjectZodSchema } from '@prisma-zod/objects/GroupChatCreateInput.schema';
import { GroupChatUpdateInputObjectZodSchema } from '@prisma-zod/objects/GroupChatUpdateInput.schema';
import { GroupChatWhereUniqueInputObjectZodSchema } from '@prisma-zod/objects/GroupChatWhereUniqueInput.schema';
import { GroupChatWhereInputObjectZodSchema } from '@prisma-zod/objects/GroupChatWhereInput.schema';
import { IntFilterObjectSchema } from '@prisma-zod/objects/IntFilter.schema';

export class CreateGroupChatDto extends createZodDto(
  GroupChatCreateInputObjectZodSchema.omit({ created_at: true }),
) {}

export class UpdateGroupChatDto extends createZodDto(
  GroupChatUpdateInputObjectZodSchema.omit({ created_at: true }),
) {}

export class GroupChatWhereUniqueDto extends createZodDto(
  GroupChatWhereUniqueInputObjectZodSchema,
) {}

export class GroupChatWhereInputDto extends createZodDto(
  GroupChatWhereInputObjectZodSchema.extend({
    user_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.coerce.number().int()])
      .optional(),
  }),
) {}
