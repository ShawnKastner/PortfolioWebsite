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
  positionFix = false;

  openMobileMenu() {
    this.dNone = false;
    this.slideIn = true;
    this.positionFix = true;
    setTimeout(() => this.slideIn = false, 500);
  }

  closeMobileMenu() {
    this.slideOut = true;

    setTimeout(() => {
      this.slideOut = false;
      this.positionFix = false;
      this.dNone = true;
    }, 100);

  }

  selectedLink(id: string) {
    if (id == 'headAbout') {
      this.setAboutMeTrue();
    } else if (id == 'headSkills') {
      this.setSkillsTrue();
    } else if (id == 'headPortfolio') {
      this.setPortfolioTrue();
    } else if (id== 'headLogo') {
      this.setAllFalse();
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

  setAllFalse() {
    this.clickPortfolio = false;
    this.clickAboutMe = false;
    this.clickSkills = false;
  }
}