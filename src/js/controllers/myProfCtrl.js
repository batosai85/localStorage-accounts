var myProfCtrl = angular.module("myProfCtrl", ["routes", "services", "directives"]);
myProfCtrl.controller("myProfCtrl", ["$rootScope", "$scope", "$location", "storage", function ($rootScope, $scope, $location, storage) {

    $location.path("/my-profile/data");
    $scope.userData = $rootScope.userData;

    $scope.logout = function () {
        $rootScope.user = undefined;
        $location.path("/");
    }
}]);