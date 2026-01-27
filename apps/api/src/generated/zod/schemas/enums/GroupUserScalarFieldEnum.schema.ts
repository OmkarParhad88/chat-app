import * as z from 'zod';

export const GroupUserScalarFieldEnumSchema = z.enum(['id', 'group_id', 'name', 'created_at'])

export type GroupUserScalarFieldEnum = z.infer<typeof GroupUserScalarFieldEnumSchema>;