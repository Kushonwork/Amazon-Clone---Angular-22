import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);

  error = '';

  loginForm = this.fb.group({

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', [
      Validators.required
    ]]

  });

  login() {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;

    }

    const { email, password } =
      this.loginForm.getRawValue();

    this.authService.login(
      email!,
      password!
    ).subscribe(users => {

      if (users.length === 0) {

        this.error = 'Invalid Email or Password';

        return;

      }

      this.authService.setUser(users[0]);

      this.router.navigate(['/']);

    });

  }

  hidePassword = true;

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

}