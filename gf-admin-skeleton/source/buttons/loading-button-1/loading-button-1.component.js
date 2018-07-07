angular.module('gfAsk.buttons').component('loadingButtonComponent1', {
    controller: LoadingButtonController1,
    controllerAs: '$ctrl',
    templateUrl:
        'source/buttons/loading-button-1/loading-button-1.component.html'
});

/**
 * - Rx
 */

LoadingButtonController1.$inject = ['$timeout', 'datetimeService'];
function LoadingButtonController1($timeout, datetimeService) {
    var ctrl = this;
    ctrl.infoList = ['info list is ready !'];

    /**
     * ImoNote:
     * ui 相关逻辑都在 button-1 组件，业务相关的逻辑在当前组件（loading-button-1 组件）
     * 数据流是从父组件到自组件单向流动的，事件是从子组件到父组件传播的。
     * （写法主要参考 https://buildingvts.com/one-way-data-flow-in-angularjs-1-6-453f97339ae3 中的项目）
     */
    ctrl.appendToInfoList = function(info, cb) {
        $timeout(function() {
            var timePrefix = '[' + datetimeService.getNowTimeStr() + '] ';
            ctrl.infoList.push(timePrefix + info);
            cb();
        }, 1300);
    };
}
