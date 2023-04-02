import { Component, ElementRef, ViewChild } from '@angular/core';

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

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement
    let sendButton = this.sendButton.nativeElement;
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
    this.successfullSend = `<span>Your e-mail has been sent successfully.</span>`;

    setTimeout(() => {
      this.activateInputFields(nameField, emailField, messageField, sendButton);
    },5000)
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
}
