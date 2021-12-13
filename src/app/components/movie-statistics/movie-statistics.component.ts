import {Component, Inject, OnInit} from '@angular/core';
import {StatisticsService} from 'src/app/services/statistics/statistics.service';
import {EChartsOption} from 'echarts';
import {MovieRatings} from 'src/app/models/movie-rating.model';
import {MovieStatistic} from 'src/app/models/movie-statistic.model';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-movie-statistics',
  templateUrl: './movie-statistics.component.html',
  styleUrls: ['./movie-statistics.component.scss']
})
export class MovieStatisticsComponent implements OnInit {

  // Movie with ID 617653 is a good example so this value is left as default for now
  movieId: number | undefined;

  // Documentation for the EChart: https://xieziyu.github.io/ngx-echarts/api-doc/
  chartOption: EChartsOption | undefined;

  constructor(private api: StatisticsService,
              @Inject(MAT_DIALOG_DATA) public data: number) {
    this.movieId = data;
  }

  ngOnInit(): void {
    if (this.movieId !== undefined) {
      this.api.getMovieStatistics(this.movieId).subscribe({
        next: value => {
          this.initChart(value);
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }

  initChart(movieRatings: MovieRatings[]): void {
    let transformedData = this.transformData(movieRatings);
    let xData: string[] = transformedData.map(value => new Date(value.date).toLocaleDateString('en-GB'))
    let yData: number[] = transformedData.map(value => value.sumOfRatings / value.voteCount)
    this.chartOption = {
      // title: {
      //   text: "Movie rating over time"
      // },
      legend: {
        data: ["Movie rating (0-10)"]
      },
      xAxis: {
        type: 'category',
        data: xData,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: "Movie rating (0-10)",
          data: yData,
          type: 'line',
        },
      ],
    };
  }

  transformData(movieRatings: MovieRatings[]): MovieStatistic[] {
    let myMap = new Map<Date, MovieStatistic>();
    movieRatings.forEach(function (item) {
      if (myMap.has(item.date)) {
        let statistic = myMap.get(item.date)
        statistic!.sumOfRatings += item.rating;
        statistic!.voteCount++;
      } else {
        let statistic: MovieStatistic = {
          date: item.date,
          sumOfRatings: item.rating,
          voteCount: 1,
        };
        myMap.set(item.date, statistic);
      }
    });
    let values = Array.from(myMap.values())
    // If you want to perform custom sorting
    // values = values.sort((a, b) => new Date(b.date).getMilliseconds() - new Date(a.date).getMilliseconds());
    return values.reverse();
  }
}
