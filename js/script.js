// original code
(function() {
  'use strict';
  // elements
  const location = document.getElementById('location'),
        time = document.getElementById('time'),
        summary = document.getElementById('summary'),
        changeFormat = document.getElementById('changeFormat'),
        precipitation = document.getElementById('precipitation'),
        humidity = document.getElementById('humidity'),
        windSpeed = document.getElementById('windSpeed'),
        currentTemp = document.getElementById('temperature'),
        futureTemp = [],
        futureDays = document.querySelectorAll('.day'),
        spinner = document.getElementById('spinner'),
        weatherBox = document.getElementById('weather-box');

  // place future temperature elements into futureTemp array
  for (let i = 0; i < 7; ++i) {
    futureTemp.push({
      max: document.getElementById(`max${i}`),
      min: document.getElementById(`min${i}`)
    });
  }

  let weather,
      skycons = new Skycons({
        "monochrome": false,
      });

  // get location
  $.ajax({
    url: "https://geoip-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(pos) {
      // location
      let city = pos.city;
      let state = pos.state;
      state = state.split(' ').length > 1 ? state.split(' ').map((word) => word[0].toUpperCase()).join('') : state;
      let postCode = pos.postal;
      let locationString = [city, state, postCode].join(' ');
      location.textContent = locationString;
      getWeather(pos);
    }
  });

  // get weather data
  function getWeather(pos) {
    let latitude = pos.latitude;
    let longitude = pos.longitude;
    let url = `https://api.darksky.net/forecast/15fabc533f09db58ec264484b4ed56b6/${latitude},${longitude}?units=ca`;
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'jsonp',
      success: function(data) {
        // assign the weather to the weather object
        weather = data;
        // set icon list for all weather icons
        // today's icon
        skycons.add(`icon${0}`, data.currently.icon.toUpperCase().replace(/-/g, '_'));
        // future icons
        let days = data.daily.data;
        for (let i = 0, len = days.length; i < len; ++i) {
          // activate icon
          skycons.add(`icon${i + 1}`, days[i].icon.toUpperCase().replace(/-/g, '_'));
        }
        // start icon animation
        skycons.play();
        // load the weather
        loadWeather(data);
      }
    });
  }

  function loadWeather(data) {
    // current weather information
    let c = data.currently;
    // summary
    summary.textContent = c.summary;
    // temperature
    loadTemperature(data);
    // precipitation
    precipitation.textContent = (c.precipProbability * 100) + '%';
    // humidity
    humidity.textContent = Math.round((c.humidity * 100)) + '%';
    // windspeed
    windSpeed.textContent = Math.round(c.windSpeed) + ' km/h';
    // time
    let restOfWeek = loadTime();
    setInterval(loadTime, 60000);
    // future days
    for (let i = 0, len = restOfWeek.length; i < len; ++i) {
      futureDays[i].textContent = restOfWeek[i].substr(0, 3);
    }
    // remove loading icon
    spinner.parentNode.removeChild(spinner);
    // un-hide the weather box
    weatherBox.style.visibility = 'visible';
    // fade in weather information
    weatherBox.style.opacity = 1;
  }

  function loadTime() {
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let dayIndex = date.getDay();
    let day = daysOfWeek[dayIndex];
    let hours = date.getHours();
    let minutes = '0' + date.getMinutes();
    time.textContent = day + ' ' + hours + ':' + minutes.substr(-2);
    // return array of next 7 days
    daysOfWeek = daysOfWeek.concat(daysOfWeek);
    return daysOfWeek.slice(dayIndex + 1, dayIndex + 8);
  }

  function loadTemperature(data) {
    let today = data.currently,
        future = data.daily.data;
    // load today's temperature
    currentTemp.textContent = Math.round(today.temperature);
    // load future temperature
    for (let i = 0, len = futureTemp.length; i < len; ++i) {
      // max
      futureTemp[i].max.textContent = Math.round(future[i].temperatureMax) + '°';
      // min
      futureTemp[i].min.textContent = Math.round(future[i].temperatureMin) + '°';
    }
  }

  function toCelcius(degrees) {
    return (degrees - 32) * 5 / 9;
  }

  function toFahrenheight(degrees) {
    return (degrees * 9 / 5) + 32;
  }

  function changeTemperatureFormat(data, fn) {
    // change current temperatures
    data.currently.temperature = fn(data.currently.temperature);
    // change future temperatures
    data.daily.data.forEach(function(item, index, array) {
      // max
      array[index].temperatureMax = fn(array[index].temperatureMax);
      // min
      array[index].temperatureMin = fn(array[index].temperatureMin);
    })
  }

  changeFormat.addEventListener('click', function() {
    // if current format is celcius
    if (this.textContent == '°C') {
      this.textContent = '°F';
      changeTemperatureFormat(weather, toFahrenheight);
    } else {
      this.textContent = '°C';
      changeTemperatureFormat(weather, toCelcius);
    }
    // update temperature on page
    loadTemperature(weather);
  });
})();

