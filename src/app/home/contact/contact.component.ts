import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public contactDetails = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-z]+$/),
    ]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    textMessage: new FormControl(''),
    feedback: new FormControl(''),
  });

  constructor() {}

  get nameControl() {
    return this.contactDetails.get('name');
  }
  get emailControl() {
    return this.contactDetails.get('email');
  }
  get phoneNumberControl() {
    return this.contactDetails.get('phoneNumber');
  }
  get messageControl() {
    return this.contactDetails.get('message');
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form submitted');
    this.contactDetails.reset();
  }
}
