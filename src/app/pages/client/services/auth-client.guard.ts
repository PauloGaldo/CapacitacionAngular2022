import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClientGuard implements CanLoad {

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    const cred = new (window as any).PasswordCredential({
      datos: 'datos'
    });

    navigator.credentials.store(cred);

    return true;
  }

}
