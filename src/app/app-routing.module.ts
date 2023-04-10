import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: '', component: BackgroundComponent },
  { path: 'imprint', component: ImprintComponent }
];

const config = {
  /* instead of use extraOptions for Router */
  onSameUrlNavigation:
    'reload' /**fix to rescroll to same anchor url after scrolling */,
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config as ExtraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
