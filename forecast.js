$(document).ready(function() {
  $("#submitForecast").click(function() {
    return getForecast();
  });
});

function getForecast() {
  var city = $("#city").val();
  var days = $("#days").val();

  if (city != "" && days != "") {
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
        city +
        "&units=metric" +
        "&cnt" +
        days +
        "&APPID=f585f0907443cdf8d1d35e7266fe26ed ",
      type: "GET",
      dataType: "jsonp",
      success: function(data) {
        var table = "";
      }
    });
  }
}
