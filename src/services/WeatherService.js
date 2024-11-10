app.service("WeatherService", [
  "$http",
  function ($http) {
    const BASE_URL = "http://localhost:3000";

    return {
      getForecastByCity: function (city) {
        return $http.get(`${BASE_URL}/forecast/city/${city}`);
      },
    };
  },
]);
