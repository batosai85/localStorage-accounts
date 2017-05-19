var adminProfEditUserCtrl = angular.module("adminProfEditUserCtrl",["routes","services"])
adminProfEditUserCtrl.controller("adminProfEditUserCtrl",["$scope","$rootScope","$location","storage", function($scope,$rootScope,$location,storage){

        if($rootScope.user === undefined){
            $location.path("/")
        }
        $scope.placeholder = $rootScope.adminUser;
        $scope.userData = {};
        var obj = {};
        var arr = [];
        var str = storage.str();
        var userData = $scope.userData;
        var rootData = $rootScope.adminUser;
    
        storage.arrSplice(str,arr,rootData,obj)
        .then(function(data){
            arr = data;
        });
        $scope.submit = function(user){ 
           storage.adminCheckStorage(arr,userData,obj,rootData,"/admin-profile/user")
           .then(function(data){
               toastr.success("User edited!");
           }).catch(function(error){
               if(error.email === "error"){
                 toastr.error("Email already exist");
               }else if(error.password === "error"){
                 toastr.error("Password already exist");
               }
           });
       }
 
}]);
