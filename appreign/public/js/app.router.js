routerConfig.$inject = ['$routeProvider'];

function routerConfig($routeProvider) {
    $routeProvider.when('/', {
        'templateUrl': '../templates/news.html',
        'controller': 'NewsController',
        'controllerAs': 'news'
    }).otherwise({'redirectTo': '/'});
}