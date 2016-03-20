angular.module("heinModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/signup/1");

    $stateProvider
    .state('user', {
        url: '/users',
        templateUrl: 'components/users/users.html',
        controller: 'userController'
    })
    .state('signup', {
        url: '/signup/{stepId}',
        templateUrl: 'components/signup/signup.html',
        controller: 'signupController'
    });
    
});
