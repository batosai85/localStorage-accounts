var loginCtrl = angular.module("loginCtrl", []);
loginCtrl.controller("loginCtrl", ["$scope", "$http", "$location", "$rootScope", "$timeout", "storage", function ($scope, $http, $location, $rootScope, $timeout, storage) {     
      storage.toastr("Please log in!");
        var str = storage.str();
        storage.init(str).then(function(data){
            console.log(data);
        }).catch(function(error){
          console.log(error);         
        })
    
        storage.set("storage", str);
        var check = {};
        var userData = {};
        var logged;
        $scope.submit = function (user) {
           storage.checkLogin(str, user, check, userData)
           .then(function(data){
              $rootScope.userData = data;
           }).catch(function(err){
           })
        
            $timeout(function () {
              storage.loginRedirect(check, logged)
              .then(function(data){
                  $rootScope.user  = data;
                  if(check.role === "admin") {
                    $location.path("/admin-profile");
                  }
                  else if (check.role === "user") {
                    $location.path("/my-profile");
                    
                 }
              }).catch(function(error){
                  toastr.error("Wrong fullname or password!");
              })
            }, 1000);
}
}]);