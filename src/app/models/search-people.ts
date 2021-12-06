import {People} from "./people";

export interface SearchPeople {
  page: number,
  results: People[],
  total_pages: number,
  total_results: number
}
