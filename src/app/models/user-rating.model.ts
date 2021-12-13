import { RatingComponent } from "../components/rating/rating.component";

export interface UserRating {
    id: number,
    user_id: number,
    movie_id: number,
    rating: number,
    date: Date,
    movie_name: string,
    movie_poster: string,
    movie_overview: string
}