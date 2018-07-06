angular.module('gfAsk.buttons').component('loadingButtonPage', {
    controller: LoadingButtonController,
    controllerAs: 'loadingBtnCtrl',
    templateUrl: 'source/buttons/loading-button/loading-button.page.html'
});

LoadingButtonController.$inject = [];
function LoadingButtonController() {
    var ctrl = this;
    ctrl.sayHello = function() {
        console.log('[test] hello button !');
    };
}
