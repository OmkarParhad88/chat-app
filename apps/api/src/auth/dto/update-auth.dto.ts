import { createLoginSchema } from './create-auth.dto';
import { z } from 'zod';

export const updateLoginSchema = createLoginSchema.partial();
export type UpdateLoginDto = z.infer<typeof updateLoginSchema>;
