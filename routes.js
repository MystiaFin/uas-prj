var app = angular.module("WeatherAPP", ["ngRoute"]).config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/", {
        templateUrl: "src/pages/home.html",
        controller: "HomeController",
      })
      .when("/forecast/:cityName", {
        templateUrl: "src/pages/forecast.html",
        controller: "ForecastController",
      })
      .when("/temperature/:cityName", {
        templateUrl: "src/pages/temperature/temperature.html",
        controller: "TemperatureController",
      })
      .when("/airpolution", {
        templateUrl: "src/pages/airpolution/airpolution.html",
        controller: "AirPolutionController",
      })
      .when("/wind/:cityName", {
        templateUrl: "src/pages/wind/wind.html",
        controller: "WindController",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);
