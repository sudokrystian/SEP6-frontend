import {MovieDetails} from "./movie-details/movie-detail.model";

export interface MovieListDetails {
    list_id: number,
    list_name: string,
    movies: MovieDetails[]
}
