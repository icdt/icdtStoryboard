app.controller('Single1ListCtrl', ['$scope', '$project', 'ngToast', '$modal', '$state', '$rootScope', function ($scope, $project, ngToast, $modal, $state, $rootScope) {

    // landing fetch list data
    listProjects();

    // update project list by event
    $scope.$on('updateProjectsList', function () {
        listProjects();
    });

    // show detail on form
    var _showProjectDetail = function (ppProjectId) {

            $rootScope.$broadcast('updateFormDetail', ppProjectId);

    };


    var _deleteProject = function (ppProjectId) {

        var modalInstance = $modal.open({
            templateUrl: '/App/pages/common/modalYesNo.html',
            controller: 'ModalYesNoCtrl',
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

    function listProjects() {
        $project.getAll().then(function (data) {
            $scope.aaObj = data;
        });
    }

}]);