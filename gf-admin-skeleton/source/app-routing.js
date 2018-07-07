app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/loading-button/0');
        $stateProvider
            .state('loadingButton', {
                url: '/loading-button',
                views: {
                    mainOutlet: {
                        // 无组件路由
                        // component: 'buttonsComponent'
                    }
                }
            })
            // TODO: 根据 :id 来决定展示哪个组件
            .state('loadingButton.detail0', {
                url: '/0',
                views: {
                    'mainOutlet@': {
                        component: 'loadingButtonComponent0'
                    }
                }
            })
            .state('loadingButton.detail1', {
                url: '/1',
                views: {
                    'mainOutlet@': {
                        component: 'loadingButtonComponent1'
                    }
                }
            });
    }
]);
