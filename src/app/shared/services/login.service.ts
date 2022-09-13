import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private eventEmittionSourceLogin = new Subject<string>();
  public eventAnnouncedLogin = this.eventEmittionSourceLogin.asObservable();

  constructor() { }

  sendLogin(username: string) {
    this.eventEmittionSourceLogin.next(username);
  }

}
