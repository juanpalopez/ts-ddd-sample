import { Artist } from "./artist";

export interface ArtistRepository {
    create(artist: Artist): Promise<void>
}