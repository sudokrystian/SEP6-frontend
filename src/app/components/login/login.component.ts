import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {sha256} from 'js-sha256';
import {AuthenticationService} from "../../services/authentication/authentication.service";

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

  constructor(private fb: FormBuilder, private api: AuthenticationService) {
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
        next: x => console.log('Observer got a next value: ' + x),
        error: err => {
          this.errorMessage = err.error
        },
      });
  }

  cancel() {
    this.loginFormGroup.reset()
    this.errorMessage = '';
  }
/* TOKEN: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM4NTQ0MzY5LCJqdGkiOiIxOTdmOTNjMWYyM2E0OTdjODdlYmMwMDBhNWRlYjE0YiIsInVzZXJfaWQiOjExfQ.IPSPxMBrF2k0z_f9YNt3c5vITwwDo_1G14c4MjMNFUQ */
  testEndpoint() {
    this.api.secured().subscribe({
      next: x=>{
        console.log('TEST: next')
        console.log(x)
      },
      error: err => {
        console.log('TEST: error')
        console.log(err)
      }
    })
  }
}
