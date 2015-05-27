app.controller('ProjectCreateCtrl', ['$scope', '$project', '$rootScope', '$state', function ($scope, $project, $rootScope, $state) {

    // url: /projects/create
    console.log('$rootScope: ', $rootScope.checkSingle);

    $scope.$on('updateFormDetail', function (e, ppProjectId) {
        console.log(ppProjectId);
        $project.getOne(ppProjectId).then(function (response) {
            $scope.projectName = response.Name;
        });
    });


    var _save = function () {

        $project.create($scope.formObj).then(function (data) {
            $rootScope.$broadcast('updateProjectsList');

            // 決定畫面怎麼跑
            
            if ($rootScope.checkSingle) {

            } else {
                $state.go('Projects.List');
            }

            
        });
    };

    $scope.vm = {
        save: _save
    };

}]);