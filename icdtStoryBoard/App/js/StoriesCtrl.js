app.controller('StoriesCtrl', ['$scope', '$story', '$modal', '$stateParams', function ($scope, $story, $modal, $stateParams) {

    var rrStories = null;
    var rrOpenModal = null;

    console.log($stateParams);

    $story.getAll($stateParams.projectId).then(function (data) {
        //rrStories = data;
        $scope.stories = data;
    });

    var rrOpenModal = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'CreateStory.html',
            controller: 'CreateStoryModalCtrl',
            size: size
        });

        modalInstance.result.then(function (storyName) {

            var newObj = {
                ProjectId: $stateParams.projectId,
                Name: storyName
            };

            $story.create(newObj).then(function (data) {
                //rrProjects.push(data);
                $scope.stories.push(data);
            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.vm = {
        projects: rrStories,
        openModal: rrOpenModal
    };

    console.log($scope);

}]);

app.controller('CreateStoryModalCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {

    $scope.create = function () {
        $modalInstance.close($scope.storyName);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);