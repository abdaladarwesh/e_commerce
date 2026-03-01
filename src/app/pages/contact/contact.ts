import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  showPopup = false;
  popupMessage = '';
  isError = false;
  popupTimeout: any;

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.isError = true;
      this.popupMessage = 'Please fill out all required fields correctly.';
      this.displayPopup();
      return;
    }

    this.isError = false;
    this.popupMessage = 'Your message has been sent successfully.';
    this.displayPopup();
    this.contactForm.reset();
  }

  displayPopup(): void {
    this.showPopup = true;
    if (this.popupTimeout) {
      clearTimeout(this.popupTimeout);
    }
    this.popupTimeout = setTimeout(() => {
      this.closePopup();
    }, 4000);
  }

  closePopup(): void {
    this.showPopup = false;
    if (this.popupTimeout) {
      clearTimeout(this.popupTimeout);
    }
  }
}
