import { KnownForCast } from "./known-for-cast.model";
import { KnownForCrew } from "./known-for-crew.model";

export interface KnownFor {
    id: number
    cast: KnownForCast[],
    crew: KnownForCrew[]
}