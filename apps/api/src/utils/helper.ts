import { ZodError } from 'zod';
export const formatError = (error: ZodError): any => {
  let errors: any = {};
  error.issues?.forEach((issue) => {
    const key = issue.path[0] || '';
    errors[key] = issue.message;
  });
  return errors;
};
