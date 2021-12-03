import { CastMember } from "./cast-member.model";
import { CrewMember } from "./crew-member.model";

export interface Credits {
    id: number,
    cast: CastMember[],
    crew: CrewMember[]
}