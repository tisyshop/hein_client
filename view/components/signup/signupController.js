angular.module("heinModule")
.controller("signupController", function ($scope, $timeout, $state, $stateParams, signupService) {
    
    // Check the step given
    if (!signupService.checkStep(parseInt($stateParams.stepId))) {
        // If not, go to step 1
        $state.go("signup", {stepId: 1});
    };
    
    // Set the controller state's parameters
    $scope.currentStep = $stateParams.stepId;
    $scope.user = signupService.getUser();
    
    // timeout in order to wait for the html to be fully calculated before trying to focus any input
    $timeout(function() {
        document.getElementById("inputStep" + $scope.currentStep).focus();
    });
    
    /*
     * Step 1 methods
     */
    $scope.submitStep1 = function() {
        $scope.goToStep(2);
    };
    
    /*
     * Step 2 methods
     */
    
    // Remove a language tag
    $scope.removeTag = function (index) {
        $scope.user.spokenLanguages.splice(index, 1);
    };
    
    $scope.submitStep2 = function() {
        if (!$scope.user.newLanguage) {
            return;
        }
        $scope.user.spokenLanguages.push(angular.copy($scope.user.newLanguage));
        $scope.user.newLanguage = "";
        return;
    };
    
    /*
     * Global methods
     */
    $scope.goToStep = function (targetStep) {
        if (targetStep <= 1 && $scope.currentStep > 1) {
            $scope.user.spokenLanguages.slice(0, $scope.user.spokenLanguages.length) ;
        }
        
        $state.go($state.current, {stepId: targetStep});
    };

});
