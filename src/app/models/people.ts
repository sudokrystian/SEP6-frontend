import {TrendingMovie} from "./trending-movie.model";


export interface People {
  adult: boolean,
  gender: number,
  id: number,
  known_for: TrendingMovie[],
  known_for_department: string,
  name: string,
  popularity: number,
  profile_path: string
}
