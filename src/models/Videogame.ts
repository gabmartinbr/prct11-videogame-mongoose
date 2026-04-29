import { Document, Schema, model } from "mongoose";
import { IVideogame } from "../interfaces/IVideogame.js";

export interface GameDocumentInterface extends IVideogame, Document { }

const VideogameSchema = new Schema<GameDocumentInterface>({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    developer: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    publisher: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    genre: {
        type: [String],
        required: true,
        enum: {
            values: ["action", "rpg", "strategy", "puzzle", "sports", "simulation", "horror", "adventure"],
            message: "{VALUE} is not a valid genre"
        },
        lowercase: true,
        trim: true,
        validate: (value: string[]) => {
            if(value.length === 0) {
                        throw new Error('At least one genre is required');
            }
        }
    },
    platform: {
        type: [String],
        enum: {
            values: ["pc", "ps5", "switch", "mobile"],
            message: "{VALUE} is not a valid platform"
        },
        lowercase: true,
        trim: true,
        validate: (value: string[]) => {
            if(value.length === 0) {
                        throw new Error('At least one platform is required');
            }
        }
    },
    releaseDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        validate: (value: number) => {
            if(value < 0 ) {
                throw new Error('Price not valid');
            }
        }
    },
    score: {
        type: Number,
        validate: (value: number) => {
            if(value < 1 || value > 100) {
                throw new Error('Price not valid');
            }
        }
    },
    multiplayer: {
        type: Boolean,
    },
    dlcs: {
        name: {
            type: String,
        },
        priceEur: {
            type: Number
        }
    },
});

export const Videogame = model<GameDocumentInterface>(
    "Videogame", VideogameSchema
)