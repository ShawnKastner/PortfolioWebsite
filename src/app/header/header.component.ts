import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dNone = true;
  headerLinks = false;

  openMobileMenu() {
    this.dNone = false;
    this.headerLinks = true;
  }

  closeMobileMenu() {
    this.dNone = true;
    this.headerLinks = false;
  }

}
