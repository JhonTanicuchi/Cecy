import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.tokenService.getAccessToken().pipe((response) => {
        const token = response;
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });

        return next.handle(request);
      })
  }
}
