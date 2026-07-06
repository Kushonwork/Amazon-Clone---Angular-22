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
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../../core/services/auth';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule

  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  error: string | null = null;
  hidePassword = true;

  hideConfirmPassword = true;

  togglePassword(){

    this.hidePassword = !this.hidePassword;

  }

  toggleConfirmPassword(){

    this.hideConfirmPassword =
      !this.hideConfirmPassword;

  }

  private fb = inject(FormBuilder);

  private snackBar = inject(MatSnackBar);

  private authService = inject(AuthService);

  private router = inject(Router);

  registerForm = this.fb.group({

    name:['', Validators.required],

    email:['',

      [

        Validators.required,

        Validators.email

      ]

    ],

    password:[

      '',

      [

        Validators.required,

        Validators.minLength(6)

      ]

    ],

    confirmPassword:[

      '',

      Validators.required

    ]

  });

  register() {

  const { password, confirmPassword } =
    this.registerForm.getRawValue();

    if(password !== confirmPassword){

        this.error = 'Passwords do not match';

        return;

    }

  if (this.registerForm.invalid) {

    this.registerForm.markAllAsTouched();

    return;

  }

  const user = this.registerForm.getRawValue() as any;

  this.authService
    .checkEmail(user.email)
    .subscribe(existingUsers => {

      if (existingUsers.length > 0) {

        this.snackBar.open('Email already registered', 'Close', {
          duration: 3000
        });

        return;

      }

      this.authService.register(user).subscribe({

          next: () => {

            this.snackBar.open(

              'Account created successfully! Please sign in.',

              'Close',

              {

                duration: 3000,

                horizontalPosition: 'center',

                verticalPosition: 'top'

              }

            );

            this.router.navigate(['/login']);

          },

          error: () => {

            this.error = 'Unable to create account';

          }

        });

    });

}

}