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
  clickAboutMe = false;
  clickSkills = false;
  clickPortfolio = false;

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

  selectedLink(id: string) {
    if (id == 'headAbout') {
      this.setAboutMeTrue();
    } else if (id == 'headSkills') {
      this.setSkillsTrue();
    } else if (id == 'headPortfolio') {
      this.setPortfolioTrue();
    }
  }

  setAboutMeTrue() {
    this.clickAboutMe = true
    this.clickSkills = false;
    this.clickPortfolio = false;
  }

  setSkillsTrue() {
    this.clickSkills = true;
    this.clickAboutMe = false;
    this.clickPortfolio = false;
  }

  setPortfolioTrue() {
    this.clickPortfolio = true;
    this.clickAboutMe = false;
    this.clickSkills = false;
  }
}