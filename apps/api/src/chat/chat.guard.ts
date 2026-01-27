import {
  CanActivate,
  ConflictException,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@Injectable()
export class ChatGatewayGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. Switch context to WebSocket
    const client: Socket = context.switchToWs().getClient<Socket>();

    const room = client.handshake.auth.room as string;
    const roo2 = client.handshake.headers.room as string;
    if (!room) {
      // throw new WsException("Invalid room")
      // throw new ConflictException("Invalid room")
    }
    // client.rooms.add(room);

    // 2. Extract Token (Header or Query)
    // const token = this.extractToken(client);

    // if (!token) {
    //   throw new UnauthorizedException('Missing auth token');
    // }

    // try {
    //   // 3. Verify Token
    //   const payload = await this.jwtService.verifyAsync(token, {
    //     secret: process.env.NEXTAUTH_SECRET, // Use your actual secret env var
    //   });

    //   // 4. Attach User to the Socket Object (so you can access it in Gateway)
    //   // This is crucial! It effectively "logs in" the socket.
    //   client.data.user = payload;

    return true;
    // } catch {
    //   throw new UnauthorizedException('Invalid auth token');
    // }
  }

  private extractToken(client: Socket): string | undefined {
    // Check Header: Authorization: Bearer <token>
    const [type, token] =
      client.handshake.headers.authorization?.split(' ') ?? [];
    if (type === 'Bearer') return token;

    // Check Query: ws://localhost:4002?token=<token>
    const queryToken = client.handshake.query.token;
    return typeof queryToken === 'string' ? queryToken : undefined;
  }
}
