// import { RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';

// export class SimpleReuseStrategy implements RouteReuseStrategy {
//   public static storedRoutes: { [key: string]: DetachedRouteHandle } = {};
//   private static waitDelete: string;
// }

// ImoNote:TODO: 待细看
import {
  RouteReuseStrategy,
  DefaultUrlSerializer,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';
import { compileFactoryFunction } from '@angular/compiler/src/render3/r3_factory';

export class SimpleReuseStrategy implements RouteReuseStrategy {
  public static storedRoutes: { [key: string]: DetachedRouteHandle } = {};

  private static waitDelete: string;

  /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('===shouldDetach-route', route);
    return true;
  }

  /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle
  ): void {
    console.log('===store-route', route, '\n└->store-handle', handle);
    SimpleReuseStrategy.storedRoutes[this.getRouteUrl(route, 'store')] = handle;
  }

  /** 若 path 在缓存中有的都认为允许还原路由 */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log(
      '===shouldAttach-route',
      route,
      '\n└->return :',
      !!SimpleReuseStrategy.storedRoutes[
        this.getRouteUrl(route, 'shouldAttach')
      ]
    );
    return !!SimpleReuseStrategy.storedRoutes[
      this.getRouteUrl(route, 'shouldAttach dup')
    ];
  }

  /** 从缓存中获取快照，若无则返回null */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    console.log('===retrieve-route', route);
    if (!route.routeConfig) {
      console.log('└->return null');
      return null;
    }
    console.log(
      '└->return cache :',
      SimpleReuseStrategy.storedRoutes[this.getRouteUrl(route, 'retrieve')]
    );

    return SimpleReuseStrategy.storedRoutes[
      this.getRouteUrl(route, 'retrieve')
    ];
  }

  /** 进入路由触发，判断是否同一路由 */
  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    console.log(
      '===shouldReuseRoute-future',
      future,
      '\n└--shouldReuseRoute-cur',
      curr,
      '\n└->return :',
      future.routeConfig === curr.routeConfig &&
        JSON.stringify(future.params) == JSON.stringify(curr.params)
    );
    return (
      future.routeConfig === curr.routeConfig &&
      JSON.stringify(future.params) == JSON.stringify(curr.params)
    );
  }

  private getRouteUrl(route: ActivatedRouteSnapshot, testTag) {
    var path = route['_routerState'].url.replace(/\//g, '_');
    console.log(`---getRouteUrl-path [${testTag}]`, path);
    return path;
  }

  public static deleteRouteSnapshot(name: string): void {
    if (SimpleReuseStrategy.storedRoutes[name]) {
      delete SimpleReuseStrategy.storedRoutes[name];
    } else {
      SimpleReuseStrategy.waitDelete = name;
    }
  }

  // ImoNote:TODO: 期望能解决 `ERROR Error: Uncaught (in promise): Error: Cannot reattach ActivatedRouteSnapshot created from a different route` 报错问题
  // private takeFullUrl(route: ActivatedRouteSnapshot) {
  //   let next = route;
  //   while (next.firstChild) {
  //     next = next.firstChild;
  //   }
  //   const segments = [];
  //   while (next) {
  //     segments.push(next.url.join('/'));
  //     next = next.parent;
  //   }
  //   return compact(segments.reverse()).join('/');
  // }
}
