import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, flatMap, mergeMap } from 'rxjs/operators';
import isUndefined from 'lodash/isUndefined';
import {AuthenticationService} from '../authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setParams: {
        private_token: this.authenticationService.getAccessToken()
      }
    });

    return next.handle(request);
  }
}
