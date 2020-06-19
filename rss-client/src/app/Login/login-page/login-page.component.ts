import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
//import { ACTION_LOGIN } from
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  async submitForm() {
    const formValue = this.loginForm.value;
    console.log(formValue);
    this.userService.login(formValue).subscribe((res) => {
      this.user = res;
      console.log(res);
      // this.userService.updateState({
      //   action: ACTION_LOGIN,
      //   payload: this.user,
      // });
      this.router.navigate(['']);
    });
  }
}
