angular.module('gfAsk.buttons').component('loadingButtonPage', {
    controller: LoadingButtonController,
    controllerAs: '$ctrl',
    templateUrl: 'source/buttons/loading-button/loading-button.page.html'
});

/**
 * - Rx
 */

LoadingButtonController.$inject = ['$timeout'];
function LoadingButtonController($timeout) {
    var ctrl = this;
    ctrl.infoList = ['info list is ready !'];

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
                var info = '[test] Hello, button #' + id;
                ctrl.infoList.push(info);
                console.log('[test] ctrl.infoList :', ctrl.infoList);
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
