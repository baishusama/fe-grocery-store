import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
// ImoNote: [NG6 change import of rxjs](https://stackoverflow.com/questions/50837367/angular-6-where-getting-error-module-rxjs-add-operator-map-and-another-error)

import { SimpleReuseStrategy } from './route/SimpleReuseStrategy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SimpleReuseStrategy]
})
export class AppComponent {
  menuList: Array<{ module: string }> = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    // TODO: 路由事件
    this.router.events
      .pipe(
        filter(event => {
          // console.log('[test] <event> :', event);
          return event instanceof NavigationEnd;
        })
      )
      .pipe(map(() => this.route))
      .pipe(
        map((route: ActivatedRoute) => {
          // console.log('[test] <ActivatedRoute> :', route);
          // console.log('[test] <snapshot> :', route.snapshot);
          // console.log('[test] <routeConfig> :', route.snapshot.routeConfig);
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      /**
       * ImoNote: 关于 'primary'：
       * You can have multiple outlets in the same template:
       * ```html
       * <router-outlet></router-outlet>
       * <router-outlet  name="sidebar"></router-outlet>
       * ```
       * - The unnamed outlet is the primary outlet.
       * - Except for the primary outlet, all other outlets must have a name.
       * more on [The Angular 6|5 Router: Named and Multiple Router-Outlets (Auxiliary Routes)](https://www.techiediaries.com/angular-router-multiple-outlets/)
       */
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(event => {
        // console.log('[test] <subscription> :', event);
        // ...
      });
  }
}
