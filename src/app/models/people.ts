import {Movie} from "./movie";

export interface People {
  adult: boolean,
  gender: number,
  id: number,
  known_for: Movie[],
  known_for_department: string,
  name: string,
  popularity: number,
  profile_path: string
}
