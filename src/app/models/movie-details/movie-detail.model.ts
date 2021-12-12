import { BelongsToCollection } from "../belongs-to-collection.model";
import { Genre } from "../genre.model";
import { ProductionCompany } from "../production-company.mode";
import { SpokenLanguage } from "../spoken-language.model";

export interface MovieDetails {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: BelongsToCollection,
    budget: number,
    genres: Genre[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ProductionCompany[],
    release_date: Date,
    revenue: number,
    runtime: number,
    spoken_languages: SpokenLanguage[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
