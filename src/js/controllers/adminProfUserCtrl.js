var adminProfUserCtrl = angular.module("adminProfUserCtrl", ["routes"]);
adminProfUserCtrl.controller("adminProfUserCtrl", ["$scope", "$rootScope", "$location", function ($scope, $rootScope, $location) {

    if ($rootScope.user === undefined) {
        $location.path("/")
    }
    $scope.userData = $rootScope.adminUser;
}]);