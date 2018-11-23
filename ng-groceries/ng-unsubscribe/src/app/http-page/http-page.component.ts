import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-page',
  templateUrl: './http-page.component.html',
  styleUrls: ['./http-page.component.scss']
})
export class HttpPageComponent implements OnInit, OnDestroy {
  httpSubscription: Subscription;

  imgUrl;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(`HttpPageComponent inits (subscribe)`);

    this.httpSubscription = this.http
      .get('https://dog.ceo/api/breeds/image/random')
      .subscribe(
        (res: { status: string; message: string }) => {
          console.log(`HttpPageComponent's http gets :`, res);
          this.imgUrl = res.message;
        },
        err => console.log(`HttpPageComponent's http catches :`, err)
      );
  }

  ngOnDestroy(): void {
    console.log(`HttpPageComponent destroys`);
    // console.log(
    //   `HttpPageComponent destroy; this.http$ is ${
    //     this.httpSubscription.isUnsubscribed ? 'NOT' : ''
    //   } unsubscribed`
    // );
  }
}
