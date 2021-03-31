import { DomainEvent } from "../../shared/domain/domainEvent";

export class ArtistCreatedDomainEvent extends DomainEvent {
    EVENT_NAME = "artist.created"
    readonly name: string

    constructor(aggregateId: string, name: string, eventId?: string, occuredOn?: Date){
        super(aggregateId, eventId, occuredOn)
        this.name = name
    }

    toPrimitive(): object {
        return {
            artistId: this.aggregateId,
            name: this.name
        }
    }

    static fromPrimitive(aggregateId: string, name:string, eventId:string, occuredOn: Date, body:any){
        return new ArtistCreatedDomainEvent(
            aggregateId,
            body.name,
            eventId,
            occuredOn
        )
    }
}