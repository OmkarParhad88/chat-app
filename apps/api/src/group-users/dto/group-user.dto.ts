import { createZodDto } from 'nestjs-zod';
import { GroupUserWhereInputObjectZodSchema } from '@prisma-zod/objects/GroupUserWhereInput.schema';
import { GroupUserCreateInputObjectZodSchema } from '@prisma-zod/objects/GroupUserCreateInput.schema';

export class GroupUserWhereInputDto extends createZodDto(
  GroupUserWhereInputObjectZodSchema,
) { }

export class CreateGroupUserDto extends createZodDto(
  GroupUserCreateInputObjectZodSchema,
) { }
