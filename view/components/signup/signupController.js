angular.module("heinModule")
.controller("signupController", function ($scope, $state, $stateParams, signupService) {
    if (!signupService.checkStep(parseInt($stateParams.stepId))) {
        $state.go('signup', {stepId: 1});
    };
    
    $scope.currentStep = $stateParams.stepId;
    $scope.user = signupService.getUser();
    
    $scope.removeTag = function (index) {
        $scope.user.spokenLanguages.splice(index, 1);
    };
    
    $scope.submit = function () {
        if ($scope.currentStep == 2) {
            if (!$scope.user.newLanguage) {
                return;
            }
            $scope.user.spokenLanguages.push(angular.copy($scope.user.newLanguage));
            $scope.user.newLanguage = "";
            return;
        }
        $state.go($state.current, {stepId: parseInt($stateParams.stepId) + 1});
    };
    
    $scope.goToStep = function (targetStep) {
        if (targetStep <= 1 && $scope.currentStep > 1) {
            $scope.user.spokenLanguages.slice(0, $scope.user.spokenLanguages.length) ;
        }
        
        $state.go($state.current, {stepId: targetStep});
    }

});
