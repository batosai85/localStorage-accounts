var adminProfUsersCtrl = angular.module("adminProfUsersCtrl", ["routes", "services"]);
adminProfUsersCtrl.controller("adminProfUsersCtrl", ["$scope", "$rootScope", "$location", "storage", function ($scope, $rootScope, $location, storage) {

    if ($rootScope.user === undefined) {
        $location.path("/");
    }
    $scope.storage = storage.str();
    $scope.link = function (user) {
        $location.path("/admin-profile/user");
        $rootScope.adminUser = user;
    }
}]);