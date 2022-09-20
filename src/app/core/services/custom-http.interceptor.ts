import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    this.spinner.show();
    const securedRequest = request.clone({
      headers: request.headers.set('Content-Type', 'application/json')
        .set('header2', 'header 2 value')
        .set('header3', 'header 3 value')
    });
    return next.handle(securedRequest).pipe(
      tap((event) => {
        this.spinner.hide();
      })
    );
  }
}
