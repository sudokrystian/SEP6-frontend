import { TrendingMovie } from "./trending-movie.model";

export interface TrendingMovies {
    page: number,
    results: TrendingMovie[],
    total_pages: number,
    total_results: number
}