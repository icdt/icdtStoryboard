app.factory('$project', ['$http', 'Restangular', '$q', function ($http, Restangular, $q) {

    return {

        getAll: function () {

            var deferred = $q.defer();

            $http.get('/api/projects').success(function (data) {

                return deferred.resolve(data);

            }).error(function (err) {

                return deferred.reject("err: ", err);

            });

            return deferred.promise;

        },

        getOne: function (ppId) {

            var deferred = $q.defer();

            $http.get('/api/projects/' + ppId).success(function (data) {

                return deferred.resolve(data);

            }).error(function (err) {

                return deferred.reject("err: ", err);

            });

            return deferred.promise;

        },

        create: function (newModel) {

            var deferred = $q.defer();

            $http.post('/api/projects', newModel).success(function (data) {
                return deferred.resolve(data);
            }).error(function (err) {
                return deferred.reject("err: ", err);
            });

            return deferred.promise;
        },

        update: function (newModel) {
            var deferred = $q.defer();

            $http.put('/api/projects/'+ newModel.id, newModel).success(function (data) {
                return deferred.resolve(data);
            }).error(function (err) {
                return deferred.reject("err: ", err);
            });

            return deferred.promise;
        },

        remove: function (ppId) {
            var deferred = $q.defer();

            $http.delete('/api/projects/' + ppId).success(function (data) {
                return deferred.resolve(data);
            }).error(function (err) {
                return deferred.reject("err: ", err);
            });

            return deferred.promise;
        }


    };

}]);