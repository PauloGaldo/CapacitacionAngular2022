import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterAnimations } from 'src/app/core/animations/router-animations';

@Component({
  selector: 'cap-client',
  template: `
  <span> cap-client </span>
  <div [@subRouteAnimations]="prepareRoute(outlet)">
    <router-outlet #outlet="outlet"></router-outlet>
  </div>
  `,
  animations: [
    RouterAnimations.routeSlide,
  ]
})
export class ClientComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}