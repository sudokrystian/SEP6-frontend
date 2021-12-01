

export class SearchByMovieData {

  _poster_path: string
  _overview: string
  _release_date: string
  _id: number
  _title: string

  constructor(
    poster_path: string,
    overview: string,
    release_date: string,
    id: number,
    title: string
  ) {

    this._poster_path = poster_path
    this._overview = overview
    this._release_date = release_date
    this._id = id
    this._title = title

  }
}
