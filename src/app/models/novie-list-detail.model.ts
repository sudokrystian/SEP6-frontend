import { MovieDetails } from "./movie-detail.model";

export interface MovieListDetails {
    list_id: number,
    list_name: string,
    movies: MovieDetails[]
}