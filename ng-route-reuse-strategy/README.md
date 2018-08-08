# 说明

## 参考

- [Angular 懒加载](https://blog.csdn.net/u011886447/article/details/79326217)
- [Angular 路由复用策略](https://blog.csdn.net/u011886447/article/details/79331443)

## 流程分析

操作：

1. 打开控制台
2. 打开 `localhost:4200/lazy-home/home-sub1/sub1`，页面输入框输入 `'111'`
3. 控制台输入分隔符（例如：...）
4. 页面点击 sub2 tab
5. 控制台输入分隔符（例如：...）
6. 页面点击 sub1 tab

控制台输出信息：

第一部分，刚打开页面时（停留在 sub1 tab）：

@import "console-logs-1.csv";

第二部分，选择 sub2 tab 时：

- `shouldReuseRoute`: url-0 true
- (`shouldReuseRoute`: url-0 true) x 2
- (`shouldReuseRoute`: url-1 true) x 2
- (`shouldReuseRoute`: url-0 true) x 2
- `shouldReuseRoute`: url-1 false
- (`retrieve`: undefined) x 2
- `shouldDetach`: true => store
- `shouldAttach`: false

第三部分，选择 sub1 tab 时：

## NgRouteReuseStrategy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
