# NgUnsubscribe

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## 实验：在 http 的 subscribe 的回调前后，切换页面

- 在 http 响应之后切换，`HttpPageComponent` 实例会被释放，即无内存泄漏问题
- 在 http 响应之前切换，`HttpPageComponent` 实例不会被释放，存在内存泄漏；但是再次切换可以成功释放内存。（神奇！）【TODO:why???】
