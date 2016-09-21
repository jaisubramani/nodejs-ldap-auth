app.controller('MainController', ['$scope', 'authService', function ($scope, authService) {
    $scope.auth = authService;
    $scope.status = {
        isopen: false
    };
    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}]);
