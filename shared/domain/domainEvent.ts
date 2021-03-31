import { UUID } from './valueObject/uuidValueObject'

export abstract class DomainEvent {
    static EVENT_NAME: string
    static fromPrimitives: (...args: any[]) => any
    
    readonly aggregateId: string
    readonly eventId: string
    readonly occuredOn: Date

    constructor(aggregateId: string, eventId?:string, occuredOn?: Date){
        this.aggregateId = aggregateId
        this.eventId = eventId || UUID.random().value
        this.occuredOn = occuredOn || new Date()
    }

    abstract toPrimitive(): object
}

export type DomainEventClass = { 
    EVENT_NAME: string,
    fromPrimitives(...args: any[]): DomainEvent
}