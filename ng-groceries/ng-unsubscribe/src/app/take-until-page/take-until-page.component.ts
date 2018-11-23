<<<<<<< HEAD
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 8a4672de657c4736e593bd102b14bd7578ae5209

@Component({
  selector: 'app-take-until-page',
  templateUrl: './take-until-page.component.html',
  styleUrls: ['./take-until-page.component.scss']
})
<<<<<<< HEAD
export class TakeUntilPageComponent implements OnInit, OnDestroy {
  interval$ = interval(1000).pipe(
    map(count => count + 1),
    startWith(0)
  );
  destroySubject = new Subject();
  timeCount;

  constructor() {}

  ngOnInit() {
    this.interval$.pipe(takeUntil(this.destroySubject)).subscribe(
      res => {
        console.log(`TakeUntilPageComponent's interval gets :`, res);
        this.timeCount = res;
      },
      err => console.log(`TakeUntilPageComponent's interval catches :`, err)
    );
  }

  ngOnDestroy() {
    console.log(`TakeUntilPageComponent destroys`);
    this.destroySubject.next();
    this.destroySubject.complete();
  }
=======
export class TakeUntilPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 8a4672de657c4736e593bd102b14bd7578ae5209
}
