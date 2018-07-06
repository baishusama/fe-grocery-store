app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/loading-button-page');
        $stateProvider.state('loadingButton', {
            url: '/loading-button-page',
            views: {
                mainOutlet: {
                    component: 'loadingButtonPage'
                }
            }
        });
    }
]);
