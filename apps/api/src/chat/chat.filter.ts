import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class ChatFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
