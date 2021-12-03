import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from "./services/session-storage/session-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SEP6-frontend';

  constructor(private sessionStorage: SessionStorageService) {}

  ngOnInit(): void {
    this.sessionStorage.initSession();
  }
}
