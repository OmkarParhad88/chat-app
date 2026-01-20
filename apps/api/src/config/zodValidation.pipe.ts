import {
  PipeTransform,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { formatError } from 'src/utils/helper';
import { z } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: z.ZodTypeAny) {}

  transform(value: unknown) {
    if (value === null || value === undefined)
      throw new BadRequestException('body is required');
    const parsedValue = this.schema.safeParse(value);
    if (!parsedValue.success) {
      throw new ConflictException(formatError(parsedValue.error));
    }
    return parsedValue.data;
  }
}
