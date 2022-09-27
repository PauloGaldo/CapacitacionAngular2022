import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterAnimations } from '../core/animations/router-animations';

@Component({
  selector: 'cap-pages',
  template: `
   <mat-toolbar>
   <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon"
    routerLink="/in/client/list">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon"
  routerLink="/in/client/new">
   <mat-icon>share</mat-icon>
 </button>
</mat-toolbar>
<div [@routeAnimations]="prepareRoute(outlet)">
  <router-outlet #outlet="outlet"></router-outlet>
</div>
  `,
  styles: [`.example-spacer {
    flex: 1 1 auto;
  }`],
  animations: [
    RouterAnimations.routeFade,
  ]
})
export class PagesComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}