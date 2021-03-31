import { ArtistId } from "./artistId"
import { ArtistAge } from "./artistAge"
import { ArtistLastName } from "./artistLastName"
import { ArtistName } from "./artistName"
import { ArtistCreatedDomainEvent } from "./artistCreatedDomainEvent"

import { AggregateRoot } from "../../shared/domain/aggregateRoot"
import { UUID } from "../../shared/domain/valueObject/uuidValueObject"

export class Artist extends AggregateRoot {
    id: ArtistId
    name: ArtistName
    lastName: ArtistLastName
    age: ArtistAge

    constructor(id: ArtistId, name: ArtistName, lastName: ArtistLastName, age:ArtistAge) {
        super()
        this.id = id
        this.name = name
        this.lastName = name
        this.age = age
    }

    static create(name: ArtistName, lastName: ArtistLastName, age: ArtistAge): Artist {
        const artist = new Artist(
            ArtistId.random(),
            name, 
            lastName,
            age
        )

        artist.record(new ArtistCreatedDomainEvent(artist.id.toString(), artist.name.toString()))

        return artist
    }

    toPrimitives(){
        return {
            id: this.id,
            name: this.name,
            lastName: this.lastName,
            age: this.age
        }
    }

}

