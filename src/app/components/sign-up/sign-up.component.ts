import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register/register.service";
import {sha224} from "js-sha256";
import {FormBuilder, FormGroup} from "@angular/forms";


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
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.signupFormGroup = this.fb.group({
      username: '',
      email: '',
      password: '',
      repeatedPassword: '',
    })
  }

  onSubmit() {
    const username = this.getUserName();
    const password = this.getPassword();
    const passwordRepeat = this.getRepeatedPassword()
    const email = this.getEmail()

    if (password!==passwordRepeat){
      this.errorMessage = 'Passwords do not match try again'
    }

    this.register.register(username, email, sha224(password)).subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  private getUserName(): string{
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
}
