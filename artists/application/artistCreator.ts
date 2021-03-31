import { Artist } from "../domain/artist";
import { ArtistRepository } from "../domain/artistRepository";
import { EventBus } from "../../shared/domain/eventBus"

export class ArtistCreator {
    private repository: ArtistRepository
    private eventBus: EventBus

    constructor(repository: ArtistRepository, eventBus: EventBus) {
        this.repository = repository
        this.eventBus = eventBus
    }

    async create(name: string, lastName:string, age:number): Promise<void> {
        const newArtist = Artist.create(name, lastName, age)

        await this.repository.create(newArtist)
        await this.eventBus.publish(newArtist.pullDomainEvents())

    }
}