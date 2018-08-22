import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpXhrBackend, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpInterceptorHandler } from './interceptor-handler';
import { I1, I2 } from './interceptors';

@Component({
  selector: 'app-custom-middleware-chain',
  templateUrl: './custom-middleware-chain.component.html',
  styleUrls: ['./custom-middleware-chain.component.scss']
})
export class CustomMiddlewareChainComponent implements OnInit {
  response: Observable<any>;

  // constructor(private http: HttpClient) {}
  constructor(private backend: HttpXhrBackend) {}

  ngOnInit() {}

  request() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    // this.response = this.http.get(url, { observe: 'body' });
    const req = new HttpRequest('GET', url);
    const i1Handler = new HttpInterceptorHandler(this.backend, new I1());
    const i2Handler = new HttpInterceptorHandler(i1Handler, new I2());
    this.response = i2Handler.handle(req); // Note: it returns a stream of HTTP events
  }
}
