var myProfDataCtrl = angular.module("myProfDataCtrl", ["routes"]);
myProfDataCtrl.controller("myProfDataCtrl", ["$scope", "$http", "$rootScope", "$location",function ($scope, $http, $rootScope, $location){
        
       if ($rootScope.user === undefined) {
            $location.path("/")
        }
        $scope.userData = $rootScope.userData;
}]);