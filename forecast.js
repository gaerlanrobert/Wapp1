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
        "&cnt=" +
        days +
        "&APPID=f585f0907443cdf8d1d35e7266fe26ed",
      type: "GET",
      dataType: "jsonp",
      success: function(data) {
        var table = "";

        for (var i = 0; i < data.list.length; i++) {
          table += "<tr>";

          table += "<td>" + data.list[i].weather[0].icon + "</td>";
          table += "<td>" + data.list[i].weather[0].main + "</td>";
          table += "<td>" + data.list[i].weather[0].description + "</td>";

          table += "</tr>";
        }

        $("#forecastWeather").html(table);

        $("#city").val("");
        $("#days").val("");
      }
    });
  } else {
    $("#error").html(
      "<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>"
    );
  }
}
