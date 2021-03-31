import { DomainEvent } from "./domainEvent";
import { DomainEventSubscriber } from "./domainEventSubscriber";

export interface EventBus {
    publish(events: Array<DomainEvent>): Promise<void>
    addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>): void
}