var myControllers = angular.module('myControllers', []);
//Controller is a method of angular
//Controllers can be attached to the DOM in different ways. For each of them, AngularJS will instantiate a new Controller object.
myControllers.controller('SearchController', function MyController($scope, $http) {//$scope is like a super global
    //This is how you initiate a http request
    //The $http service is a core AngularJS service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSON.
    $http.get('js/data.json')
    .then(function (res) {
        //The $scope is glue between a controller and view (HTML). It transfers data from the controller to view and vice-versa.
        $scope.artists = res.data;
        //This establishes a default
        $scope.artistOrder = 'name';
    });
})
myControllers.controller('DetailsController', function MyController($scope, $http, $routeParams) {//$scope is like a super global
    $http.get('js/data.json')
    .then(function (res) {
        $scope.artists = res.data;
        //Finding out what item was clicked, 0 = first item in the array
        $scope.whichItem = $routeParams.itemId;
    });
})