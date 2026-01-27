import { Socket } from 'socket.io';

declare module 'socket.io' {
  interface Socket {
    handshake: {
      auth: {
        room?: string | null;
      };
    };
    room?: string | null;
  }
}
