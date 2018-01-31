NewsController.$inject = ['NewsService'];

function NewsController(NewsService) {

    var vm = this;
     vm.news = [];

    function init() {
        //Calling News Service
        NewsService.getNews(_success, _error);

        /**
         * @name _success
         * @param response
         * @private
         */
        function _success(response) {
            console.log(response);
        }

        /**
         * @name _error
         * @param err
         * @private
         */
        function _error(err){
            console.log(err);
        }
    }

    init();

}