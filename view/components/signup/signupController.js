angular.module("heinModule")
.controller("signupController", function($scope, $state, $stateParams, signupService){
    if (parseInt($stateParams.stepId) < 1 || parseInt($stateParams.stepId) > 4) {
        $state.go(signup, {stepId: 1});
    }
    
    $scope.currentStep = $stateParams.stepId;

    $scope.user = signupService.getUser();
    
    $scope.submit = function() {
        $state.go($state.current, {stepId: parseInt($stateParams.stepId) + 1});
    };
    
    $scope.back = function() {
        $scope.user.spokenLanguages.slice(0, $scope.user.spokenLanguages.length) ;
        $state.go($state.current, {stepId: parseInt($stateParams.stepId) - 1});
    }

});
