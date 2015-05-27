var app = angular.module('StoryBoardApp', ['ui.router', 'restangular', 'ngToast', 'ui.bootstrap', 'ui.bootstrap.tpls']);

app.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

        }
]);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'RestangularProvider', 'ngToastProvider',
function ($stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider, ngToastProvider) {

    $urlRouterProvider.otherwise('/projects/list');

    $stateProvider
    .state('Projects', {
        abstract: true,
        url: '/projects',
        template: '<div ui-view></div>',
        resolve: {
            checkSingle: ['$rootScope', function ($rootScope) {
                $rootScope.checkSingle = false;
            }]
        }
    })
      .state('Projects.List', {
          url: '/list',
          templateUrl: '/App/pages/project/list.html',
          controller: 'ProjectListCtrl'
      })
        .state('Projects.Create', {
            url: '/create',
            templateUrl: '/App/pages/project/form.html',
            controller: 'ProjectCreateCtrl'
        })
            .state('Projects.Detail', {
                url: '/:projectId/detail',
                templateUrl: '/App/pages/project/form.html',
                controller: 'ProjectEditCtrl'
            })
    // Single page 1 -----------------------------
        .state('SingplePage1', {
            abstract: true,
            url: '/s1',
            templateUrl: '/App/pages/s1/layout.html',
            resolve: {
                checkSingle: ['$rootScope', function ($rootScope) {
                    $rootScope.checkSingle = true;
                }]
            }
        })
    .state('SingplePage1.Content', {
        url: '/ui',
        views: {
            form: {
                templateUrl: '/App/pages/project/form.html',
                controller: 'Single1EditCtrl'
            },
            list: {
                templateUrl: '/App/pages/project/list.html',
                controller: 'Single1ListCtrl'
            }
        }
    })
    // Single page 2 -----------------------------
            .state('SingplePage2', {
                abstract: true,
                url: '/s2',
                templateUrl: '/App/pages/s1/layout.html',
                controller: 'Single2Ctrl'
            })
    .state('SingplePage2.Content', {
        url: '/ui',
        views: {
            form: {
                templateUrl: '/App/pages/project/form.html',
                controller: 'Single2EditCtrl'
            },
            list: {
                templateUrl: '/App/pages/project/list.html',
                controller: 'Single2ListCtrl'
            }
        }
    })
    ;

    RestangularProvider.setBaseUrl('/api');
    ngToastProvider.configure({
        animation: 'slide' // or 'fade'
        //verticalPosition: 'bottom',
        //horizontalPosition:'center'
    });

}]);