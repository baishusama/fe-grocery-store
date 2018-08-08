import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-home-sub1',
  templateUrl: './lazy-home-sub1.component.html',
  styleUrls: ['./lazy-home-sub1.component.css']
})
export class LazyHomeSub1Component implements OnInit {
  // ImoNote: 这里的代码只是为了测试 `routeConfig`
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => {
          return event instanceof NavigationEnd;
        })
      )
      .subscribe(e => {
        // console.log('[test] #sub1# route :', this.route);
        // console.log('[test] #sub1# snapshot :', this.route.snapshot);
        // console.log(
        //   '[test] #sub1# routeConfig :',
        //   this.route.snapshot.routeConfig
        // );
      });
  }

  ngOnInit() {}
}
