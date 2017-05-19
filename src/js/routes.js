var routes = angular.module("routes", ["ui.router"]);
routes.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("login", {
        url: "/"
        , templateUrl: "/login.html"
        , controller: "loginCtrl"
    }).state("register", {
        url: "/register"
        , templateUrl: "/register.html"
        , controller: "registerCtrl"
    }).state("admin-profile", {
        url: "/admin-profile"
        , templateUrl: "/adminProfile.html"
        , controller: "adminProfCtrl"
    }).state("admin-profile.users", {
        url: "/users"
        , templateUrl: "/adminProfUsers.html"
        , controller: "adminProfUsersCtrl"
    }).state("admin-profile.user", {
        url: "/user"
        , templateUrl: "/adminProfUser.html"
        , controller: "adminProfUserCtrl"
    }).state("admin-profile.edit-user", {
        url: "/edit-user"
        , templateUrl: "/adminProfEditUser.html"
        , controller: "adminProfEditUserCtrl"
    }).state("my-profile", {
        url: "/my-profile"
        , templateUrl: "/myProfile.html"
        , controller: "myProfCtrl"
    }).state("my-profile.data", {
        url: "/data"
        , templateUrl: "/myProfileData.html"
        , controller: "myProfDataCtrl"
    }).state("my-profile.edit", {
        url: "/edit"
        , templateUrl: "/myProfileEdit.html"
        , controller: "myProfEditCtrl"
    })
    $urlRouterProvider.otherwise("/");
});