/**
 * 由于 gfAsk.core 模块已经注入了应用的根模块 gfAsk，
 * 不再需要在 gfAsk.buttons 注入 gfAsk.core，
 * 就可以使用其中的 datetimeService 服务了！
 *
 * TODO: 如果有 gfAsk.shared 模块，且不在根模块 gfAsk 注入，只在子模块注入，那么需要注入几次呢？
 *
 *    A. 仅需要一次（-> 我猜是这个答案！）
 *    B. 每次在子模块中使用都需要
 */

angular.module('gfAsk.buttons', []);
