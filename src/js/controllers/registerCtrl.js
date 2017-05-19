var registerCtrl = angular.module("registerCtrl", ["routes","services"]);
registerCtrl.controller("registerCtrl", ["$scope", "$http", "$location", "$timeout","storage", function ($scope, $http, $location, $timeout,storage) {
    
    storage.toastr("Please fill the form!");
    $scope.register = function (user) {
       storage.register(user).then(function(data){
        toastr.success("User created!");
        $timeout(function () {
            $location.path("/");
        }, 1600);
       }).catch(function(error){
           toastr.warning("Email or password already exist!");
       })
    }
}]);