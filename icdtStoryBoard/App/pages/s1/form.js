app.controller('Single1EditCtrl', ['$scope', '$project', '$rootScope', '$state', function ($scope, $project, $rootScope, $state) {

    $scope.formObj = {};

    // catch list chosen item
    $scope.$on('updateFormDetail', function (e, ppProjectId) {
        $project.getOne(ppProjectId).then(function (response) {
            $scope.formObj = response;
        });
    });


    var _save = function () {

        if (jQuery.isEmptyObject($scope.formObj)) {
            $project.create($scope.formObj).then(function (data) {
                $rootScope.$broadcast('updateProjectsList');
                $scope.formObj = {};
            });
        } else {
            $project.update($scope.formObj).then(function (data) {
                $rootScope.$broadcast('updateProjectsList');
                $scope.formObj = {};
            });
        }

    };

    $scope.vm = {
        save: _save
    };

}]);