import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'provider', 'image', 'oauth_id', 'created_at'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;