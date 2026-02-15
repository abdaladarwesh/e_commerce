import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CircleX, LucideAngularModule } from "lucide-angular";


interface LoginForm{
  email: FormControl<string>,
  password: FormControl<string>
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, LucideAngularModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  readonly CircleIcon = CircleX; 
  protected form = new FormGroup<LoginForm>({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    })
  })
}
