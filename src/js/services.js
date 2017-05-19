var services = angular.module("services", ["ngAnimate"]);
services.service("storage", ["$q","$location", "$timeout", function ($q,$location, $timeout) {
    
    this.str = function(){
        var storage = JSON.parse(localStorage.getItem("storage")) || [];
        return storage;
    }
    this.init = function(str){
        var defer = $q.defer();
        if (str.length === 0) {
            str.push({
                role: "admin"
                , name: "John Doe"
                , email: "admin@hotmail.com"
                , password: "123"
                , regDate: new Date()
                , modDate: ""
            });
            defer.resolve(str);
        }else{
            defer.reject(str);
        }
        return defer.promise;
    }
    this.set = function(name,str){
       localStorage.setItem(name, JSON.stringify(str));
    }
    this.checkLogin = function(storage,user,check,userData){
        for (var i = 0; i < storage.length; ++i) { 
            if (storage[i].name === user.name && storage[i].password === user.password) {
                check.user = "exist";
                check.role = storage[i].role;
                userData = storage[i];
            }
         }
         var defer = $q.defer();
         if(check.user === "exist"){
           defer.resolve(userData);   
         }else{
             defer.reject(userData);
         }
        return defer.promise;
    }
    
    this.loginRedirect = function(check,logged){
       var defer = $q.defer();
       if (check.user === "exist") {
                 logged = "logged";
                 defer.resolve(logged);
            }
            else {
                defer.reject(logged);
            }
        return defer.promise;
    }
    
    this.register = function(user){
        var user = user;
        var newUser = {};
        newUser.name = user.name;
        newUser.role = "user";
        newUser.password = user.password;
        newUser.email = user.email;
        newUser.regDate = new Date();
        newUser.modDate = "";
        var str = this.str();
        var check;
        var defer = $q.defer();
        for (var i = 0; i < str.length; ++i) {
            if (str[i].password === user.password || str[i].email === user.email) {
                 check = "exist";
            }
        }
        if(check === "exist"){
            defer.reject(newUser);
        }else {
            str.push(newUser);
            this.set("storage",str);
            defer.resolve(newUser);
        }
        return defer.promise;
    }
    
    this.arrSplice = function (str, arr, root, obj) {
        var count;
        var check;
        var defer = $q.defer();
        for (var i = 0; i < str.length; ++i) {
            if (str[i].email === root.email && str[i].password === root.password) {
                 obj = str[i];
                check = "exist";
            }
        }
        if(check === "exist"){
         count = str.indexOf(obj);
         str.splice(count, 1);
         defer.resolve(str)
        }
        
        return defer.promise;
    }
    this.   userCheckStorage = function (arr, userData, obj, root,path) {
        var check = {};
        var defer = $q.defer();
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i].email === userData.email) {
                check.email = "error";
            }
            if (arr[i].password === userData.password) {
                check.password = "error";
            }
        }
        if (check.email !== "error" && check.password !== "error") {
            obj.name = userData.name;
            obj.email = userData.email;
            obj.password = userData.password;
            obj.regDate = root.regDate;
            obj.modDate = new Date();
            obj.role = "user";
            root.name = userData.name;
            root.email = userData.email;
            root.password = userData.password;
            root.regDate = obj.regDate;
            root.modDate = new Date();
            root.role = obj.role;
            arr.push(obj);
            this.set("storage",arr);
            $timeout(function () {
                $location.path(path);
            }, 1500);
            defer.resolve(check);
        }else{
            defer.reject(check);
        }
        return defer.promise;
    }
    this.adminCheckStorage = function (arr, userData, obj, root,path) {
        var check = {};
        var defer = $q.defer();
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i].email === userData.email) {
                check.email = "error";
            }
            if (arr[i].password === userData.password) {
                check.password = "error";
            }
        }
        if (check.email !== "error" && check.password !== "error" && check.role !== "error") {
            obj.name = userData.name;
            obj.email = userData.email;
            obj.password = userData.password;
            obj.regDate = root.regDate;
            obj.modDate = new Date();
            obj.role = userData.role;
            root.name = userData.name;
            root.email = userData.email;
            root.password = userData.password;
            root.regDate = obj.regDate;
            root.modDate = new Date();
            root.role = userData.role;
            arr.push(obj);
            this.set("storage",arr);
            $timeout(function () {
                  $location.path(path);
             }, 1500);
            defer.resolve(check);
        }else{
            defer.reject(check);
        }
        return defer.promise;
    }
    
    this.toastr = function(message){
        toastr.info(message);
    }
}]);