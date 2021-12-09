import {Component, OnInit} from "@angular/core";
import {SessionStorageService} from "../../../services/session-storage/session-storage.service";
import {AuthenticationService} from "../../../services/authentication/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(
    private sessionService: SessionStorageService,
    private authenticationService: AuthenticationService

  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = (this.sessionService.getLoginStatus())
  }

  logout()
  {
    console.log("logout")
    this.authenticationService.logout();
  }

}
