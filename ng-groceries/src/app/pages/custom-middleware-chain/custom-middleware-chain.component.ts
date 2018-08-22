import { Component, OnInit, Inject } from '@angular/core';
import {
  // HttpClient,
  HttpXhrBackend,
  HttpRequest,
  HTTP_INTERCEPTORS,
  HttpInterceptor,
  HttpHandler
} from '@angular/common/http';
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
  constructor(
    private backend: HttpXhrBackend,
    @Inject(HTTP_INTERCEPTORS) private interceptors: HttpInterceptor[]
  ) {}

  ngOnInit() {}

  request() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // Way 1. 通过 HttpClient 来实现
    // this.response = this.http.get(url, { observe: 'body' });

    // Way 2. 通过 HttpClient 底层的 HttpXhrBackend 来实现
    const req = new HttpRequest('GET', url);

    // Way 2.1. 手动实现“链”
    // const i1Handler = new HttpInterceptorHandler(this.backend, new I1());
    // const i2Handler = new HttpInterceptorHandler(i1Handler, new I2());

    // Way 2.2. 通过 reduceRight 自动实现“链”
    // const i2Handler = this.interceptors.reduceRight(
    //   (next, interceptor) => new HttpInterceptorHandler(next, interceptor),
    //   this.backend
    // );
    const i2Handler = this.interceptors.reduceRight(
      /**
       * ImoNote: 这里的 HttpHandler 类型需要加上，否则报错（not assignable）
       * 本质原因是 HttpBackend 和 HttpInterceptorHandler 类型不兼容【待补充】
       */
      (next, interceptor): HttpHandler =>
        new HttpInterceptorHandler(next, interceptor),
      this.backend
    );

    this.response = i2Handler.handle(req); // Note: it returns a stream of HTTP events
  }
}
