import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dNone = true;
  headerLinks = true;
  slideIn = false;
  slideOut = false;

  openMobileMenu() {
    this.dNone = false;
    this.slideIn = true;
    setTimeout(() => this.slideIn = false, 500);
  }

  closeMobileMenu() {
    this.slideOut = true;

    setTimeout(() => {
      this.slideOut = false;
      this.dNone = true;
    }, 200);

  }

}
