import { createZodDto } from 'nestjs-zod';
import { ChatCreateInputObjectZodSchema } from '@prisma-zod/objects/ChatCreateInput.schema';

export class CreateChatDto extends createZodDto(
  ChatCreateInputObjectZodSchema,
) {}
