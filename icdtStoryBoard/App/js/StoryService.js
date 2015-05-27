app.factory('$story', ['$http', 'Restangular', '$q', function ($http, Restangular, $q) {

    return {

        getAll: function (ppProjectId) {

            var deferred = $q.defer();

            $http.get('/api/projects/' + ppProjectId + '/stories').success(function (data) {

                return deferred.resolve(data);

            }).error(function (err) {

                return deferred.reject("err: ", err);

            });

            return deferred.promise;

        },

        create: function (newModel) {

            var deferred = $q.defer();

            $http.post('/api/stories', newModel).success(function (data) {
                return deferred.resolve(data);
            }).error(function (err) {
                return deferred.reject("err: ", err);
            });

            return deferred.promise;
        }


    };

}]);