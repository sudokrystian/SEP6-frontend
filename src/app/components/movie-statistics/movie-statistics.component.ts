import { Component, Input, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics/statistics.service';

@Component({
  selector: 'app-movie-statistics',
  templateUrl: './movie-statistics.component.html',
  styleUrls: ['./movie-statistics.component.scss']
})
export class MovieStatisticsComponent implements OnInit {

  @Input()
  private movieId: number = 617653;

  constructor(private api: StatisticsService) { }

  ngOnInit(): void {
    this.api.getMovieStatistics(this.movieId).subscribe({
      next: value=>{
        console.log('TEST: next')
        console.log(value)
      },
      error: err => {
        console.log('TEST: error')
        console.log(err)
      }
    })
  }

}
