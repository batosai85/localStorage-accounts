var directives = angular.module("directives", ["ngAnimate"]);
directives.directive("linkUsed", function () {
    var link;
    link = function (scope, elem, attrs) {
        elem.bind("click", function () {
            $(".linkIn").removeClass("linkIn");
            $(this).addClass("linkIn");
        })
    }
    return {
        link: link
    }
});