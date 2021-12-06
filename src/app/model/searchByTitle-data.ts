export class SearchByTitleData {

  _id: number
  _title: string
  _year: number

  constructor(
    id: number,
    title: string,
    year: number
  ) {

    this._id = id
    this._title = title
    this._year = year
  }
}
