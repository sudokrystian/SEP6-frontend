import { Component, OnInit } from '@angular/core';
import { sha256 } from "js-sha256";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // @ts-ignore
  signupFormGroup: FormGroup;

  errorMessage: string = '';
  messageToUser: string = '';
  registered = false;

  constructor(private api: AuthenticationService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.signupFormGroup = this.fb.group({
      username: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
      ])],
      repeatedPassword: ['', Validators.compose([
        Validators.required
      ])],
    })
  }

  onSubmit() {
    const username = this.getUserName();
    const password = this.getPassword();
    const passwordRepeat = this.getRepeatedPassword()
    const email = this.getEmail()

    if (password !== passwordRepeat) {
      this.messageToUser = 'Passwords do not match try again'
    }

    this.api.register(username, email, sha256(password)).subscribe({
      next: (res) => {
        if (res.success === true) {
          this.registered = true;
          this.router.navigateByUrl('/login');
        }
      },
      error: (err) => {
        if (err.status == 403) {
          this.errorMessage = "User " + username + " already exists. Change your credentials"
          this.signupFormGroup.reset();
        } else {
          console.log("Error")
          console.log(err)
        }
      }
    });
  }

  private getUserName(): string {
    return this.signupFormGroup.get('username')?.value
  }

  private getPassword() {
    return this.signupFormGroup.get('password')?.value
  }

  private getRepeatedPassword() {
    return this.signupFormGroup.get('repeatedPassword')?.value
  }

  private getEmail() {
    return this.signupFormGroup.get('email')?.value
  }

  cancel() {
    this.signupFormGroup.reset()
    this.errorMessage = '';
    this.messageToUser = '';
  }
}
