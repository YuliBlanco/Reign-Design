angular.module('NewsManager', ['ngRoute', 'ng-bootstrap-datepicker', 'ui.utils.masks'])
    .controller('NewsController', NewsController)
    .service('NewsService', NewsService)
    .config(routerConfig)
    .run(function ($rootScope) {
        //$rootScope.path = 'public/';
    });