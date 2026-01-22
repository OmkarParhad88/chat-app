import * as z from 'zod';

export const GroupChatScalarFieldEnumSchema = z.enum(['id', 'user_id', 'title', 'passcode', 'created_at'])

export type GroupChatScalarFieldEnum = z.infer<typeof GroupChatScalarFieldEnumSchema>;