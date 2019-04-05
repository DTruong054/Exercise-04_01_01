//The angular.module is a global place for creating, registering and retrieving AngularJS modules
//The array will hold dependencies 
var myApp = angular.module('myApp', [])

//Controller is a method of angular
//Controllers can be attached to the DOM in different ways. For each of them, AngularJS will instantiate a new Controller object.
myApp.controller('MyController', function MyController($scope, $http) {//$scope is like a super global
    //This is how you inititate a http request
    //The $http service is a core AngularJS service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.
    $http.get('js/data.json')
    .then(function (res) {
        //The $scope is glue between a controller and view (HTML). It transfers data from the controller to view and vice-versa.
        $scope.artists = res.data;
    });
    // $scope.artists = [{
    //     "name":"Barot Bellingham",
    //     "shortname":"Barot_Bellingham",
    //     "reknown":"Royal Academy of Painting and Sculpture",
    //     "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
    // }]
})