import * as z from 'zod';

export const GroupUsersScalarFieldEnumSchema = z.enum(['id', 'group_id', 'name', 'created_at'])

export type GroupUsersScalarFieldEnum = z.infer<typeof GroupUsersScalarFieldEnumSchema>;