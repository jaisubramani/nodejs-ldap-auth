app.controller('LoginController', ['$scope', '$rootScope', '$location', '$localStorage', '$http', function ($scope, $rootScope, $location, $localStorage, $http) {
    $scope.loginService = function() {
        $http.post('/api/authenticate', $scope.formData)
            .success(function(data) {
                if (data.success == true) {
                    $localStorage.loggedIn = true;
                    $localStorage.loggedInUser = data.user;
                    $location.path('/home').replace();
                } else {
                    $scope.formData.password = '';
                    $scope.success = data.success;
                    $scope.message = data.message;
                    $localStorage.$reset();
                }
            })
            .error(function(data) {
                $scope.data = data;
                console.log(data);
            });
    };
}]);
