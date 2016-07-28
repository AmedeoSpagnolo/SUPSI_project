$(document).ready(function(){

  $('#info_date').html(moment().format('D.MM.YY'))

  $.simpleWeather({
    woeid: 783201,
    unit: 'f',
    success: function(weather) {
      $('#info_location').html(weather.city+"."+weather.region)
      $('#info_temp').html(weather.temp+" "+weather.units.temp)
      $('#info_weather').html(weather.currently)
      $('#info_wind').html(weather.wind.speed+" "+weather.wind.direction)
    },
    error: function(error) {
      console.log(error)
    }
  })

});

