app.controller('Single2Ctrl', ['$scope', function ($scope) {

    $scope.formObj = {};
    $scope.aaObj = [];
    $scope.bb = 'parent scope';

}]);

app.controller('Single2ListCtrl', ['$scope', '$project', 'ngToast', '$modal', '$state', '$rootScope', function ($scope, $project, ngToast, $modal, $state, $rootScope) {

    // url: /projects/list

    // landing data
    $project.getAll().then(function (data) {
        $scope.aaObj = data;
    });

    var _showProjectDetail = function(ppProjectId) {
        
        $scope.$parent.formObj =
            _.find($scope.aaObj, function (item) {
                return item.id == ppProjectId;
            });

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



}]);

app.controller('Single2EditCtrl', ['$scope', '$project', '$rootScope', '$state', '$stateParams', function ($scope, $project, $rootScope, $state, $stateParams) {

    // url: /projects/create

    var _save = function () {

        $project.update($scope.$parent.formObj).then(function (data) {
            $project.getAll().then(function (data) {
                $scope.$parent.aaObj = data;
            });
        });
    };

    $scope.vm = {
        save: _save
    };


}]);