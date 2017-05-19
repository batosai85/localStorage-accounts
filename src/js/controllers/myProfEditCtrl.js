var myProfEditCtrl = angular.module("myProfEditCtrl", ["routes", "services"]);
myProfEditCtrl.controller("myProfEditCtrl", ["$scope", "$rootScope", "$location", "$timeout", "storage", function ($scope, $rootScope, $location, $timeout, storage) {

    if ($rootScope.user === undefined) {
        $location.path("/")
    }
    $scope.placeholder = $rootScope.userData;
    $scope.userData = {};
    var obj = {};
    var arr = [];
    var str = storage.str();
    var userData = $scope.userData;
    var rootData = $rootScope.userData;

    storage.arrSplice(str, arr, rootData, obj)
        .then(function (data) {
            arr = data;
        });

    $scope.submit = function (user) {
        storage.userCheckStorage(arr, userData, obj, rootData, "/my-profile/data")
            .then(function (data) {
                toastr.success("User edited!");
            }).catch(function (error) {
                if (error.email === "error") {
                    toastr.error("Email already exist");
                } else if (error.password === "error") {
                    toastr.error("Password already exist");
                }
            });
    }
}]);