import { MessageService } from "./message.service"

describe('MessageService', () => {
  let service: MessageService

  beforeEach(() => {
    service = new MessageService;
  })

  it('should have no messages to start', () => {
    // Assert
    expect(service.messages.length).toBe(0)
  })

  it('should add a message when add is called', () => {
    // Add a message
    service.add('message1');

    // Assert
    expect(service.messages.length).toBe(1);
  })

  it('should remove all messages when clear is called', () => {
    // Add a message to be cleared
    service.add('message1');

    // Clear messages
    service.clear()

    // Assert
    expect(service.messages.length).toBe(0)
  })
})