import { z } from 'zod';

export const createLoginSchema = z.strictObject({
  name: z
    .string({ error: 'Name must be a string' })
    .min(3, { error: 'Name must be at least 3 characters long' })
    .max(191, { error: 'Name must be at most 191 characters long' })
    .trim(),
  email: z.email({ error: 'Email must be a valid email' }).trim(),
  provider: z
    .string({ error: 'Provider must be a string' })
    .max(100, { error: 'Provider must be at most 100 characters long' })
    .trim(),
  image: z.string({ error: 'Image must be a valid URL' }).optional(),
  oauth_id: z.string({ error: 'OAuth ID must be a string' }).trim(),
  created_at: z
    .date({ error: 'Created at must be a date' })
    .default(new Date()),
});

export type CreateLoginDto = z.infer<typeof createLoginSchema>;
