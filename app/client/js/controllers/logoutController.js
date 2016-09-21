app.controller('LogoutController', ['$scope', '$location', '$localStorage', function ($scope, $location, $localStorage) {
    $localStorage.$reset();
    $location.path('/login').replace();
}]);
