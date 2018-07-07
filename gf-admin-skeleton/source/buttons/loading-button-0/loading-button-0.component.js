angular.module('gfAsk.buttons').component('loadingButtonComponent0', {
    controller: LoadingButtonController0,
    controllerAs: '$ctrl',
    templateUrl:
        'source/buttons/loading-button-0/loading-button-0.component.html'
});

/**
 * - Rx
 */

LoadingButtonController0.$inject = ['$timeout', 'datetimeService'];
function LoadingButtonController0($timeout, datetimeService) {
    var ctrl = this;
    ctrl.infoList = ['info list is ready !'];

    /**
     * ImoNote:
     * isLoadingSet 作为按钮绑定事件的一个属性（利用函数的第一类对象本质）
     * 但这种做法会导致 ui 相关的逻辑和按钮触发的业务逻辑混杂在一起
     */
    var loadingUtilities = (function() {
        function initLoadingSet(fn) {
            if (!fn.isLoadingSet) {
                fn.isLoadingSet = {};
            }
        }
        function startLoading(fn, key) {
            fn.isLoadingSet[key] = true;
        }
        function endLoading(fn, key) {
            fn.isLoadingSet[key] = false;
        }

        var fetchInfo = function thisFn(id) {
            startLoading(thisFn, id);

            // setTimeout(function() {
            $timeout(function() {
                var timePrefix = '[' + datetimeService.getNowTimeStr() + '] ';
                var info = 'Button ' + id + ' clicked.';
                ctrl.infoList.push(timePrefix + info);
                endLoading(thisFn, id);
            }, 1000);
        };
        initLoadingSet(fetchInfo);

        return {
            fetchInfo: fetchInfo
        };
    })();

    ctrl.fetchInfo = loadingUtilities.fetchInfo;
}
