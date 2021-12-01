import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register/register.service";
import {sha224, sha256} from "js-sha256";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // @ts-ignore
  signupFormGroup: FormGroup;

  errorMessage = '';

  constructor(private register: RegisterService,
              private fb: FormBuilder) {
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
      this.errorMessage = 'Passwords do not match try again'
    }

    this.register.register(username, email, sha256(password)).subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
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
  }
}
