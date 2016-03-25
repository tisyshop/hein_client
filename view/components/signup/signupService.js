angular.module('heinModule')
.service('signupService', function ($state) {
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
    
    var checkStep = function(step) {
        // Pas de break ici, chaque cas doit executer tous ses sous-cas
        switch (step) {
            case 3:
                if (!user.spokenLanguages.length) {
                    return false;
                }
            case 2:
                if (!user.name) {
                    return false;
                }
            case 1:
                return true;
            default:
                return false;

        }
    };

    return {
        getUser : getUser,
        setUser : setUser,
        checkStep: checkStep
    };
});
