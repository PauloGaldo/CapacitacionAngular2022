import { animate, group, query, style, transition, trigger } from '@angular/animations';

export class RouterAnimations {

  static routeFade = trigger('routeAnimations', [
    // transition('* <=> *', [
    //     query(':enter, :leave', [
    //         style({
    //             position: 'absolute',
    //             left: 0,
    //             width: '100%',
    //             opacity: 0,
    //             transform: 'scale(0) translateY(100%)',
    //         }),
    //     ]),
    //     query(':enter', [
    //         animate('100ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
    //     ])
    // ])
    transition('*<=>*', [
      // css styles at start of transition
      style({ opacity: 0 }),
      // animation and styles at end of transition
      animate('0.2s ease-in-out', style({ opacity: 1 }))
    ]),
  ]);

  static routeSlide = trigger('subRouteAnimations', [
    transition('* <=> *', [
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.4s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.4s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
  ]);

}