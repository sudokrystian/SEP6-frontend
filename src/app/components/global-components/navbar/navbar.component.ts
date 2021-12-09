import { Component, OnInit } from "@angular/core";
import { SessionStorageService } from "../../../services/session-storage/session-storage.service";
import { AuthenticationService } from "../../../services/authentication/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private sessionService: SessionStorageService,
    public authenticationService: AuthenticationService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigateByUrl('/');
  }

}
