angular.module('heinModule')
    .service('signupService', function () {
        var user = {
            name: '',
            spokenLanguages: [],
            learnedLanguages: []
        };
        
        var getUser = function () {
            return user;
        };
    
        var setUser = function (newUser) {
            user = newUser;
        };
    
        return {
            getUser : getUser,
            setUser : setUser
        };
    });
