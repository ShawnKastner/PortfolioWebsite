import {  Component } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { ViewportScroller } from '@angular/common'; //import
import { filter } from 'rxjs';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  private applicationInitialRoutes!: Routes;
  constructor(
    private router: Router,
    private viewPortScroller: ViewportScroller//inject
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.viewPortScroller.scrollToPosition([0, 0]));
  }
}
