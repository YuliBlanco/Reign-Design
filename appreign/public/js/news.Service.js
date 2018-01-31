NewsService.$inject = ['$http', '$log', '$q'];

function NewsService($http, $log, $q) {

    _.extend(this, {
        getNews: getNews
    });

    function getNews (){
        var deferred = $q.defer();
        $http({
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: 'getNews/',
            method: 'GET'
        }).then(function (data) {
            deferred.resolve({data: data});
        }, function (msg, code) {
            deferred.reject(msg);
            $log.error(msg, code);
        });
        return deferred.promise;
    }
}