app.service('authService', ['$http', '$localStorage', function($http, $localStorage) {
    this.loggedIn = function () {
        return $localStorage.loggedIn;
    };
    this.loggedInUser = function () {
        return $localStorage.loggedInUser;
    };
}]);
