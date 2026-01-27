import { createZodDto } from 'nestjs-zod';
import { UserCreateInputObjectZodSchema } from '@prisma-zod/objects/UserCreateInput.schema';

export class CreateUserDto extends createZodDto(
  UserCreateInputObjectZodSchema,
) {}
