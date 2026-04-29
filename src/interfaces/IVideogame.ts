import { Genre } from "../enums/Genre.js"
import { Platform } from "../enums/Platform.js"
import { IDlcs } from "./IDlcs.js"

export interface IVideogame {
    title: string,
    developer: string,
    publisher: string,
    genre: Genre[],
    platform: Platform[],
    releaseDate: Date,
    price: number,
    score: number,
    multiplayer: boolean,
    dlcs: IDlcs[]
    
}