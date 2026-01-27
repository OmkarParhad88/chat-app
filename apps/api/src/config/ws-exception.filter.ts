import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';
import { Prisma } from '../generated/prisma/client';

@Catch(WsException, Prisma.PrismaClientKnownRequestError)
export class WsExceptionFilter extends BaseWsExceptionFilter {
  catch(
    exception: WsException | Prisma.PrismaClientKnownRequestError,
    host: ArgumentsHost,
  ) {
    super.catch(exception, host);
  }
}
