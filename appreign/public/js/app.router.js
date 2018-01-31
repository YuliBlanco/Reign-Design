routerConfig.$inject = ['$routeProvider'];

function routerConfig($routeProvider) {
    $routeProvider.when('/', {
        'templateUrl': 'public/templates/news.html',
        'NewsController': 'ReceivableCtrl',
        'controllerAs': 'news'
    }).otherwise({'redirectTo': '/'});
}