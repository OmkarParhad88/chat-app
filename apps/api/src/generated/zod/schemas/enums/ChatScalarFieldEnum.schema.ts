import * as z from 'zod';

export const ChatScalarFieldEnumSchema = z.enum([
  'id',
  'group_id',
  'message',
  'name',
  'file',
  'created_at',
]);

export type ChatScalarFieldEnum = z.infer<typeof ChatScalarFieldEnumSchema>;
