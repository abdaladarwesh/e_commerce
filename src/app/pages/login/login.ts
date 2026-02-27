import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CircleX, LucideAngularModule } from "lucide-angular";
import { Router, RouterLink } from "@angular/router";


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

  router = inject(Router);

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

  handleButtonClick(){
    if (this.form.valid)
    this.router.navigate(['/'])
  }
}
