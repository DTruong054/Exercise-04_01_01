//The angular.module is a global place for creating, registering and retrieving AngularJS modules
//The array will hold dependencies 
var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers'
])

//Declare our app/apps as modules. Going to redefine them to make them individuals.
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        //This tells us where to find our partials
        templateUrl: 'js/partials/search.html',
        controller: 'SearchController'
    })
    //Attaching a name:value pair within out deep link
    .when('/details/:itemId',{
        templateUrl: 'js/partials/details.html',
        controller: 'DetailsController'
    });
}]);