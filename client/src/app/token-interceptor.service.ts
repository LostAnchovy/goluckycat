import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth:AuthService){}
  
// GRABS THE JWT TOKEN AND SETS IT INTO THE HEADER. TOKEN IS SENT TO THE SERVER EACH TIME THERE IS A HTTP REQUEST TO THE SERVER. SERVER AUTHENTICATES THE TOKEN AND ALLOWS/NOT ALLOW USER.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._auth.getToken()}`
      }
    });

    return next.handle(request);
  }

}
