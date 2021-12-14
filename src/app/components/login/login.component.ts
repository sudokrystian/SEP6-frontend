import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {sha256} from 'js-sha256';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {SessionStorageService} from "../../services/session-storage/session-storage.service";
import {Router} from "@angular/router";

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
              private session: SessionStorageService,
              private router: Router) {
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
    const password = this.loginFormGroup.get('password')?.value;
    if(username && password) {
      const hashedPassword = sha256(password)
      this.api.login(username, hashedPassword).subscribe({
          next: x => {
            localStorage.setItem('username', username)
            localStorage.setItem('loginStatus', 'true');
            localStorage.setItem('token', x.access);
            this.router.navigateByUrl('/');
          },
          error: err => {
            if (err.error === 'Incorrect login or password'){
              this.errorMessage = err.error;
            } else if(err.error.detail === 'No active account found with the given credentials') {
              this.errorMessage = err.error.detail;
            }
              console.log(err)
          },
        });
    } else {
      this.errorMessage = "Insert credentials to log in"
    }

  }

  cancel() {
    this.loginFormGroup.reset()
    this.errorMessage = '';
  }
}
