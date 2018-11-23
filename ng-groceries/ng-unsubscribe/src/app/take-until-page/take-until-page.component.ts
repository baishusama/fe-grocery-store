import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until-page',
  templateUrl: './take-until-page.component.html',
  styleUrls: ['./take-until-page.component.scss']
})
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
}
