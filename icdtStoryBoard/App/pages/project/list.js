app.controller('ProjectListCtrl', ['$scope', '$project', 'ngToast', '$modal', '$state', '$rootScope', function ($scope, $project, ngToast, $modal, $state, $rootScope) {

    // url: /projects/list

    // landing data
    listProjects();

    // update project list by event
    $scope.$on('updateProjectsList', function() {
        listProjects();
    });

    function listProjects() {
        $project.getAll().then(function (data) {
            $scope.aaObj = data;
        });
    }

    var _showProjectDetail = function (ppProjectId) {

        console.log('ppProjectId: ', ppProjectId);

        if ($rootScope.checkSingle) {
            $rootScope.$broadcast('updateFormDetail', ppProjectId);
        } else {
            $state.go('Projects.Detail', { projectId: ppProjectId });
        }


    };


    var _deleteProject = function (ppProjectId) {

        var modalInstance = $modal.open({
            templateUrl: '/App/pages/common/modalYesNo.html',
            controller: 'ModalYesNoCtrl',
            animation: true,
            size: 'sm'
        });

        modalInstance.result.then(function () {

            $project.remove(ppProjectId).then(function (response) {
                _.remove($scope.aaObj, function (data) {
                    return data.id === response.id;
                });

                ngToast.create({
                    className: 'success',
                    content: 'Delete OK !!'
                });

            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.vm = {
        deleteProject: _deleteProject,
        showProjectDetail: _showProjectDetail
    };



}]);