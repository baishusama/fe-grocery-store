import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class I1 implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modified = req.clone({
      setHeaders: { 'Custom-Header-1': 'value-1' }
    });
    return next.handle(modified);
  }
}

@Injectable()
export class I2 implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modified = req.clone({
      setHeaders: { 'Custom-Header-2': 'value-2' }
    });
    return next.handle(modified);
  }
}
