import { ChatGatewayGuard } from './chat.guard';

describe('ChatGuard', () => {
  it('should be defined', () => {
    expect(new ChatGatewayGuard()).toBeDefined();
  });
});
