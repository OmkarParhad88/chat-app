import * as z from 'zod';

export const ChatsScalarFieldEnumSchema = z.enum(['id', 'group_id', 'message', 'name', 'file', 'created_at'])

export type ChatsScalarFieldEnum = z.infer<typeof ChatsScalarFieldEnumSchema>;