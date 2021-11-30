import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { sha256 } from 'js-sha256';
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Is initialized by FormBuilder in ngOnInit()
  // @ts-ignore
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private api: LoginService) { }

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
    this.api.login(username,password).subscribe(
      data => console.log(data),
      err=> console.log(err)
    );
  }

  cancel() {
    this.loginFormGroup.reset()
  }
}
