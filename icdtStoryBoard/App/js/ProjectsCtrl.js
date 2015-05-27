app.controller('ProjectsCtrl', ['$scope', '$project', '$modal', function ($scope, $project, $modal) {

    var rrProjects = null;
    var rrOpenModal = null;



    $project.getAll().then(function (data) {
        //rrProjects = data;
        $scope.projects = data;
    });

    var rrOpenModal = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'CreateProject.html',
            controller: 'CreateProjectModalCtrl',
            size: size
        });

        modalInstance.result.then(function (projectName) {
            
            var newProject = { Name: projectName };

            $project.create(newProject).then(function (data) {
                //rrProjects.push(data);
                $scope.projects.push(data);
            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.vm = {
        projects: rrProjects,
        openModal: rrOpenModal
    };

    console.log($scope);

}]);

app.controller('CreateProjectModalCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {

    $scope.createProject = function () {
        $modalInstance.close($scope.projectName);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);