angular.module('NewsManager', ['ngRoute'])
    .controller('NewsController', NewsController)
    .service('NewsService', NewsService)
    .config(routerConfig)
    .run(function ($rootScope) {
        //$rootScope.path = 'public/';
    });