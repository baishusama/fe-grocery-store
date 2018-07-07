angular.module('gfAsk.buttons').component('button1', {
    bindings: {
        index: '<',
        onButtonClicked: '&'
    },
    controller: ButtonController1,
    controllerAs: '$ctrl',
    templateUrl:
        'source/buttons/loading-button-1/button-1/button-1.component.html'
});

/**
 * - Rx
 */

ButtonController1.$inject = ['$timeout'];
function ButtonController1($timeout) {
    var ctrl = this;
    ctrl.buttonStyleList = [
        'btn-danger',
        'btn-warning',
        'btn-success',
        'btn-primary',
        'btn-secondary',
        'btn-info'
    ];
    ctrl.isLoading = false;

    // TODO: 组件的创建和销毁的生命周期待深入研究
    console.log('[test] #ButtonController1# ctrl.index :', ctrl.index);
    ctrl.$onInit = function() {
        console.log(
            '[test] #ButtonController1# $onInit, ctrl.index :',
            ctrl.index
        );
    };

    ctrl.sendInfo = function() {
        ctrl.isLoading = true;
        var info = 'Button ' + ctrl.index + ' clicked.';
        // TODO: 注意这里传递的是一个包含 info 属性的对象
        ctrl.onButtonClicked({
            info: info,
            callback: endLoading
        });
    };

    function endLoading() {
        ctrl.isLoading = false;
    }
}
