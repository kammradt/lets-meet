import { User } from '../../users/user.entity';
import { Event } from '../event.entity';
import { EventStatus } from '../event-status.enum';
import { EventUpdateRequest } from '../dtos/event-update-request';
import { UserRole } from '../../users/user-role.enum';
import { classToClass } from 'class-transformer';

const mockUser = new User();

const mockRegularUser = new User();
mockRegularUser.email = 'mock@email.com';
mockRegularUser.role = UserRole.REGULAR;

const mockPremiumUser = classToClass(mockRegularUser);
mockPremiumUser.role = UserRole.ADMIN;

const mockEvent = new Event();
mockEvent.title = 'EventTitle';
mockEvent.description = 'EventDescription';
mockEvent.status = EventStatus.OPEN;
mockEvent.startDate = new Date();
mockEvent.endDate = new Date(mockEvent.startDate.getTime() + 3600);
mockEvent.maxAttendees = 20;

const mockEvent1 = new Event();

const mockEvents: Event[] = [mockEvent, mockEvent1];

const mockEventUpdateRequest = new EventUpdateRequest();
mockEventUpdateRequest.title = 'newEventTitle';
mockEventUpdateRequest.description = 'newEventDescription';
mockEventUpdateRequest.maxAttendees = 35;
mockEventUpdateRequest.status = EventStatus.CANCELED;

const mockUpdatedEvent = {
  ...mockEvent, ...mockEventUpdateRequest,
};

export {
  mockUser,
  mockRegularUser,
  mockPremiumUser,
  mockEvent,
  mockEvent1,
  mockEvents,
  mockEventUpdateRequest,
  mockUpdatedEvent
};