import { createZodDto } from 'nestjs-zod';
import { ChatCreateInputObjectZodSchema } from '@prisma-zod/objects/ChatCreateInput.schema';
import z from 'zod';

export class CreateChatDto extends createZodDto(ChatCreateInputObjectZodSchema) { }

export const messageSchema = z
  .object({
    id: z.uuid(),
    message: z.string().optional().nullable(),
  })
  .strict();

export type MessageType = z.infer<typeof messageSchema>;

export class SendMessageDto extends createZodDto(messageSchema) { }
