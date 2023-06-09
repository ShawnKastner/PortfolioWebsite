import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailValidator, NgForm, Validators, FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  successfullSend: string = '';

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  contactForm;

  constructor(private formBuilder: FormBuilder) {


    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement
    let sendButton = this.sendButton.nativeElement;
    let myForm = this.myForm.nativeElement;
    this.disabledInputFields(nameField, emailField, messageField, sendButton);

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    await fetch('https://shawn-kastner.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    myForm.reset();
    this.successfullSend = `<span>Your e-mail has been sent successfully.</span>`;

    setTimeout(() => {
      this.activateInputFields(nameField, emailField, messageField, sendButton);
      this.successfullSend = '';
    }, 10000)
  }

  disabledInputFields(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  activateInputFields(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
