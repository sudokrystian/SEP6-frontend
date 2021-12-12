import {Backdrops} from "./backdrops";
import {Posters} from "./posters";

export interface MovieImages {
  id: number,
  backdrops: Backdrops[],
  posters: Posters[]
}
