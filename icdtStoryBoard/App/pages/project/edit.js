app.controller('ProjectEditCtrl', ['$scope', '$project', '$rootScope', '$state', '$stateParams', function ($scope, $project, $rootScope, $state, $stateParams) {

    // url: /projects/create
    var project = null;

    $project.getOne($stateParams.projectId).then(function (data) {
        project = data;
        $scope.projectName = data.Name;
    });


    var _save = function () {

        project.Name = $scope.projectName;

        $project.update(project).then(function (data) {
            $rootScope.$broadcast('updateProjects');
            $state.go('Projects.List');
        });
    };

    $scope.vm = {
        save: _save
    };


}]);