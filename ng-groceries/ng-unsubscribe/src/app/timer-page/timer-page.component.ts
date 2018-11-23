import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.scss']
})
export class TimerPageComponent implements OnInit {
  time = 10000;
  text = `长达 ${this.time / 1000} 秒的计时器开始了...`;

  constructor() {}

  ngOnInit() {
    timer(this.time).subscribe(
      res => {
        console.log(`TimerPageComponent's timer gets :`, res);
        this.text = `长达 ${this.time / 1000} 秒的计时器结束了～`;
      },
      err => console.log(`TimerPageComponent's timer catches :`, err)
    );
  }
}
