var adminProfCtrl = angular.module("adminProfCtrl", ["routes"]);
adminProfCtrl.controller("adminProfCtrl", ["$scope", "$rootScope", "$location", function ($scope, $rootScope, $location) {

    $location.path("/admin-profile/users");
    if ($rootScope.user === undefined) {
        $location.path("/")
    }
    $scope.userData = $rootScope.userData;
    $scope.logout = function () {
        $rootScope.user = undefined;
        $location.path("/");
    }
}]);