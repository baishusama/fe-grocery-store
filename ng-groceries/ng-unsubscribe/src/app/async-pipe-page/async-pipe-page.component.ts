import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe-page',
  templateUrl: './async-pipe-page.component.html',
  styleUrls: ['./async-pipe-page.component.scss']
})
export class AsyncPipePageComponent implements OnInit {
  interval$ = interval(1000).pipe(
    map(count => count + 1),
    startWith(0)
  );

  constructor() {}

  ngOnInit() {}
}
