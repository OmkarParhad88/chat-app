import { createZodDto } from 'nestjs-zod';
import { GroupUsersWhereInputObjectSchema } from '@prisma-zod/objects/GroupUsersWhereInput.schema';
import { GroupUsersCreateInputObjectSchema } from '@prisma-zod/objects/GroupUsersCreateInput.schema';

export class GroupUsersWhereInputDto extends createZodDto(
  GroupUsersWhereInputObjectSchema,
) { }

export class CreateGroupUserDto extends createZodDto(
  GroupUsersCreateInputObjectSchema,
) { }
