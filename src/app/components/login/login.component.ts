import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {sha256} from 'js-sha256';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {SessionStorageService} from "../../services/session-storage/session-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Is initialized by FormBuilder in ngOnInit()
  // @ts-ignore
  loginFormGroup: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private api: AuthenticationService,
              private session: SessionStorageService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginFormGroup = this.fb.group({
      username: '',
      password: '',
    })
  }

  submitLogin() {
    const username = this.loginFormGroup.get('username')?.value;
    const password = sha256(this.loginFormGroup.get('password')?.value);
    this.api.login(username, password).subscribe({
        next: x => {

          this.session.setUsername(username);
          this.session.setLoginStatus(true);
          this.session.setSessionCookie(x.access);
          console.log(`Submit login next: ${x}`);
        },
        error: err => {
          if (err.error === 'Incorrect login or password'){
            this.errorMessage = err.error;
          } else if(err.error.detail === 'No active account found with the given credentials') {
            this.errorMessage = err.error.detail;
          }
            console.log("LOGIN: ERROR")
            console.log(err)

        },
      });
  }

  cancel() {
    this.loginFormGroup.reset()
    this.errorMessage = '';
  }

  logout() {
    this.api.logout().subscribe({
      next: value => {
        console.log("LOGOUT: NEXT")
        console.log(value)},
      error: err => {
        console.log("LOGOUT: ERROR")
        console.log(err);
      }
    });
  }
}
