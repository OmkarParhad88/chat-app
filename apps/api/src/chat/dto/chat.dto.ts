import { createZodDto } from 'nestjs-zod';
import { ChatsCreateInputObjectSchema } from '@prisma-zod/objects/ChatsCreateInput.schema';

export class CreateChatDto extends createZodDto(ChatsCreateInputObjectSchema) { }
