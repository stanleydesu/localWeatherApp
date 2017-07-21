// original code
// (function() {
//   'use strict';
//   // elements
//   const location = document.getElementById('location'),
//         time = document.getElementById('time'),
//         summary = document.getElementById('summary'),
//         changeFormat = document.getElementById('changeFormat'),
//         precipitation = document.getElementById('precipitation'),
//         humidity = document.getElementById('humidity'),
//         windSpeed = document.getElementById('windSpeed'),
//         currentTemp = document.getElementById('temperature'),
//         futureTemp = [],
//         futureDays = document.querySelectorAll('.day'),
//         spinner = document.getElementById('spinner'),
//         weatherBox = document.getElementById('weather-box');

//   // place future temperature elements into futureTemp array
//   for (let i = 0; i < 7; ++i) {
//     futureTemp.push({
//       max: document.getElementById(`max${i}`),
//       min: document.getElementById(`min${i}`)
//     });
//   }

//   let weather,
//       skycons = new Skycons({
//         "monochrome": false,
//       });

//   // get location
//   $.ajax({
//     url: "https://geoip-db.com/jsonp",
//     jsonpCallback: "callback",
//     dataType: "jsonp",
//     success: function(pos) {
//       // location
//       let city = pos.city;
//       let state = pos.state;
//       state = state.split(' ').length > 1 ? state.split(' ').map((word) => word[0].toUpperCase()).join('') : state;
//       let postCode = pos.postal;
//       let locationString = [city, state, postCode].join(' ');
//       location.textContent = locationString;
//       getWeather(pos);
//     }
//   });

//   // get weather data
//   function getWeather(pos) {
//     let latitude = pos.latitude;
//     let longitude = pos.longitude;
//     let url = `https://api.darksky.net/forecast/[key]/${latitude},${longitude}?units=ca`;
//     $.ajax({
//       type: 'GET',
//       url: url,
//       dataType: 'jsonp',
//       success: function(data) {
//         // assign the weather to the weather object
//         weather = data;
//         // set icon list for all weather icons
//         // today's icon
//         skycons.add(`icon${0}`, data.currently.icon.toUpperCase().replace(/-/g, '_'));
//         // future icons
//         let days = data.daily.data;
//         for (let i = 0, len = days.length; i < len; ++i) {
//           // activate icon
//           skycons.add(`icon${i + 1}`, days[i].icon.toUpperCase().replace(/-/g, '_'));
//         }
//         // start icon animation
//         skycons.play();
//         // load the weather
//         loadWeather(data);
//       }
//     });
//   }

//   function loadWeather(data) {
//     // current weather information
//     let c = data.currently;
//     // summary
//     summary.textContent = c.summary;
//     // temperature
//     loadTemperature(data);
//     // precipitation
//     precipitation.textContent = (c.precipProbability * 100) + '%';
//     // humidity
//     humidity.textContent = Math.round((c.humidity * 100)) + '%';
//     // windspeed
//     windSpeed.textContent = Math.round(c.windSpeed) + ' km/h';
//     // time
//     let restOfWeek = loadTime();
//     setInterval(loadTime, 60000);
//     // future days
//     for (let i = 0, len = restOfWeek.length; i < len; ++i) {
//       futureDays[i].textContent = restOfWeek[i].substr(0, 3);
//     }
//     // remove loading icon
//     spinner.parentNode.removeChild(spinner);
//     // fade in weather information
//     weatherBox.style.opacity = 1;
//   }

//   function loadTime() {
//     let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     let date = new Date();
//     let dayIndex = date.getDay();
//     let day = daysOfWeek[dayIndex];
//     let hours = date.getHours();
//     let minutes = '0' + date.getMinutes();
//     time.textContent = day + ' ' + hours + ':' + minutes.substr(-2);
//     // return array of next 7 days
//     daysOfWeek = daysOfWeek.concat(daysOfWeek);
//     return daysOfWeek.slice(dayIndex + 1, dayIndex + 8);
//   }

//   function loadTemperature(data) {
//     let today = data.currently,
//         future = data.daily.data;
//     // load today's temperature
//     currentTemp.textContent = Math.round(today.temperature);
//     // load future temperature
//     for (let i = 0, len = futureTemp.length; i < len; ++i) {
//       // max
//       futureTemp[i].max.textContent = Math.round(future[i].temperatureMax) + '°';
//       // min
//       futureTemp[i].min.textContent = Math.round(future[i].temperatureMin) + '°';
//     }
//   }

//   function toCelcius(degrees) {
//     return (degrees - 32) * 5 / 9;
//   }

//   function toFahrenheight(degrees) {
//     return (degrees * 9 / 5) + 32;
//   }

//   function changeTemperatureFormat(data, fn) {
//     // change current temperatures
//     data.currently.temperature = fn(data.currently.temperature);
//     // change future temperatures
//     data.daily.data.forEach(function(item, index, array) {
//       // max
//       array[index].temperatureMax = fn(array[index].temperatureMax);
//       // min
//       array[index].temperatureMin = fn(array[index].temperatureMin);
//     })
//   }

//   changeFormat.addEventListener('click', function() {
//     // if current format is celcius
//     if (this.textContent == '°C') {
//       this.textContent = '°F';
//       changeTemperatureFormat(weather, toFahrenheight);
//     } else {
//       this.textContent = '°C';
//       changeTemperatureFormat(weather, toCelcius);
//     }
//     // update temperature on page
//     loadTemperature(weather);
//   });
// })();

// obfuscated code
'use strict';
var _0xbab0=['\x63\x75\x72\x72\x65\x6e\x74\x6c\x79','\x64\x61\x69\x6c\x79','\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x61\x78','\x66\x6f\x72\x45\x61\x63\x68','\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x69\x6e','\x63\x6c\x69\x63\x6b','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x64\x65\x62\x75\x67\x67\x65\x72','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x74\x69\x6d\x65','\x73\x75\x6d\x6d\x61\x72\x79','\x63\x68\x61\x6e\x67\x65\x46\x6f\x72\x6d\x61\x74','\x70\x72\x65\x63\x69\x70\x69\x74\x61\x74\x69\x6f\x6e','\x68\x75\x6d\x69\x64\x69\x74\x79','\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c','\x2e\x64\x61\x79','\x6d\x61\x78','\x6d\x69\x6e','\x61\x6a\x61\x78','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x65\x6f\x69\x70\x2d\x64\x62\x2e\x63\x6f\x6d\x2f\x6a\x73\x6f\x6e\x70','\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x6a\x73\x6f\x6e\x70','\x63\x69\x74\x79','\x73\x70\x6c\x69\x74','\x6c\x65\x6e\x67\x74\x68','\x6a\x6f\x69\x6e','\x70\x6f\x73\x74\x61\x6c','\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74','\x6c\x61\x74\x69\x74\x75\x64\x65','\x6c\x6f\x6e\x67\x69\x74\x75\x64\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x64\x61\x72\x6b\x73\x6b\x79\x2e\x6e\x65\x74\x2f\x66\x6f\x72\x65\x63\x61\x73\x74\x2f\x62\x39\x31\x38\x35\x39\x34\x64\x38\x63\x65\x62\x38\x66\x32\x31\x34\x36\x65\x30\x30\x35\x30\x35\x66\x32\x31\x35\x32\x37\x64\x30\x2f','\x3f\x75\x6e\x69\x74\x73\x3d\x63\x61','\x47\x45\x54','\x61\x64\x64','\x69\x63\x6f\x6e','\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65','\x72\x65\x70\x6c\x61\x63\x65','\x64\x61\x74\x61','\x70\x6c\x61\x79','\x72\x6f\x75\x6e\x64','\x20\x6b\x6d\x2f\x68','\x73\x75\x62\x73\x74\x72','\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65','\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64','\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79','\x76\x69\x73\x69\x62\x6c\x65','\x73\x74\x79\x6c\x65','\x6f\x70\x61\x63\x69\x74\x79','\x53\x75\x6e\x64\x61\x79','\x4d\x6f\x6e\x64\x61\x79','\x54\x75\x65\x73\x64\x61\x79','\x57\x65\x64\x6e\x65\x73\x64\x61\x79','\x54\x68\x75\x72\x73\x64\x61\x79','\x46\x72\x69\x64\x61\x79','\x53\x61\x74\x75\x72\x64\x61\x79','\x67\x65\x74\x44\x61\x79','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x63\x6f\x6e\x63\x61\x74','\x73\x6c\x69\x63\x65'];(function(_0x23499c,_0x137921){var _0x40a059=function(_0x2a3783){while(--_0x2a3783){_0x23499c['\x70\x75\x73\x68'](_0x23499c['\x73\x68\x69\x66\x74']());}};var _0x1753d3=function(){var _0x3c9f9a={'\x64\x61\x74\x61':{'\x6b\x65\x79':'\x63\x6f\x6f\x6b\x69\x65','\x76\x61\x6c\x75\x65':'\x74\x69\x6d\x65\x6f\x75\x74'},'\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65':function(_0x361e07,_0x86876b,_0x14e444,_0x2b6818){_0x2b6818=_0x2b6818||{};var _0x522c50=_0x86876b+'\x3d'+_0x14e444;var _0x374a0a=0x0;for(var _0x374a0a=0x0,_0x743dc=_0x361e07['\x6c\x65\x6e\x67\x74\x68'];_0x374a0a<_0x743dc;_0x374a0a++){var _0x39e43c=_0x361e07[_0x374a0a];_0x522c50+='\x3b\x20'+_0x39e43c;var _0x1325d9=_0x361e07[_0x39e43c];_0x361e07['\x70\x75\x73\x68'](_0x1325d9);_0x743dc=_0x361e07['\x6c\x65\x6e\x67\x74\x68'];if(_0x1325d9!==!![]){_0x522c50+='\x3d'+_0x1325d9;}}_0x2b6818['\x63\x6f\x6f\x6b\x69\x65']=_0x522c50;},'\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65':function(){return'\x64\x65\x76';},'\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65':function(_0x4c3293,_0x5c1da3){_0x4c3293=_0x4c3293||function(_0x3dba3f){return _0x3dba3f;};var _0x56af54=_0x4c3293(new RegExp('\x28\x3f\x3a\x5e\x7c\x3b\x20\x29'+_0x5c1da3['\x72\x65\x70\x6c\x61\x63\x65'](/([.$?*|{}()[]\/+^])/g,'\x24\x31')+'\x3d\x28\x5b\x5e\x3b\x5d\x2a\x29'));var _0x2ebd07=function(_0x54b290,_0x4cdbf2){_0x54b290(++_0x4cdbf2);};_0x2ebd07(_0x40a059,_0x137921);return _0x56af54?decodeURIComponent(_0x56af54[0x1]):undefined;}};var _0x3e6a09=function(){var _0x312469=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return _0x312469['\x74\x65\x73\x74'](_0x3c9f9a['\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65']['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};_0x3c9f9a['\x75\x70\x64\x61\x74\x65\x43\x6f\x6f\x6b\x69\x65']=_0x3e6a09;var _0x20d26b='';var _0x7ad8ab=_0x3c9f9a['\x75\x70\x64\x61\x74\x65\x43\x6f\x6f\x6b\x69\x65']();if(!_0x7ad8ab){_0x3c9f9a['\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65'](['\x2a'],'\x63\x6f\x75\x6e\x74\x65\x72',0x1);}else if(_0x7ad8ab){_0x20d26b=_0x3c9f9a['\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65'](null,'\x63\x6f\x75\x6e\x74\x65\x72');}else{_0x3c9f9a['\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65']();}};_0x1753d3();}(_0xbab0,0x100));var _0x0bab=function(_0x2233a0,_0x28ee07){_0x2233a0=_0x2233a0-0x0;var _0x3cc96b=_0xbab0[_0x2233a0];return _0x3cc96b;};(function(){var _0x32136e=function(){var _0x1de2cf=!![];return function(_0x188b55,_0x3d0709){var _0x40af93=_0x1de2cf?function(){if(_0x3d0709){var _0x48158e=_0x3d0709['\x61\x70\x70\x6c\x79'](_0x188b55,arguments);_0x3d0709=null;return _0x48158e;}}:function(){};_0x1de2cf=![];return _0x40af93;};}();var _0x5185d4=_0x32136e(this,function(){var _0x38de73=function(){return'\x64\x65\x76';},_0x32ad35=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x8b392f=function(){var _0x24c92e=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x24c92e['\x74\x65\x73\x74'](_0x38de73['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5e650b=function(){var _0x55c4c1=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x55c4c1['\x74\x65\x73\x74'](_0x32ad35['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x10d350=function(_0x2a7fa8){var _0x50d981=~-0x1>>0x1+0xff%0x0;if(_0x2a7fa8['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x50d981)){_0x4fe939(_0x2a7fa8);}};var _0x4fe939=function(_0x946034){var _0x1b3e90=~-0x4>>0x1+0xff%0x0;if(_0x946034['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1b3e90){_0x10d350(_0x946034);}};if(!_0x8b392f()){if(!_0x5e650b()){_0x10d350('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x10d350('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x10d350('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x5185d4();'\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74';const _0x425755=document[_0x0bab('0x0')](_0x0bab('0x1')),_0x573a74=document[_0x0bab('0x0')](_0x0bab('0x2')),_0x593df1=document[_0x0bab('0x0')](_0x0bab('0x3')),_0x5754cd=document[_0x0bab('0x0')](_0x0bab('0x4')),_0x41e1a6=document[_0x0bab('0x0')](_0x0bab('0x5')),_0x565471=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x0bab('0x6')),_0x59fbc9=document[_0x0bab('0x0')]('\x77\x69\x6e\x64\x53\x70\x65\x65\x64'),_0x414394=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x0bab('0x7')),_0x3fc18c=[],_0x44c7a9=document[_0x0bab('0x8')](_0x0bab('0x9')),_0x2f1b6d=document[_0x0bab('0x0')]('\x73\x70\x69\x6e\x6e\x65\x72'),_0x3926a9=document[_0x0bab('0x0')]('\x77\x65\x61\x74\x68\x65\x72\x2d\x62\x6f\x78');for(let _0x5421f4=0x0;_0x5421f4<0x7;++_0x5421f4){_0x3fc18c['\x70\x75\x73\x68']({'\x6d\x61\x78':document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x0bab('0xa')+_0x5421f4),'\x6d\x69\x6e':document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x0bab('0xb')+_0x5421f4)});}let _0x555386,_0xc470f6=new Skycons({'\x6d\x6f\x6e\x6f\x63\x68\x72\x6f\x6d\x65':![]});$[_0x0bab('0xc')]({'\x75\x72\x6c':_0x0bab('0xd'),'\x6a\x73\x6f\x6e\x70\x43\x61\x6c\x6c\x62\x61\x63\x6b':_0x0bab('0xe'),'\x64\x61\x74\x61\x54\x79\x70\x65':_0x0bab('0xf'),'\x73\x75\x63\x63\x65\x73\x73':function(_0x32c98c){let _0x22b313=_0x32c98c[_0x0bab('0x10')];let _0x46e310=_0x32c98c['\x73\x74\x61\x74\x65'];_0x46e310=_0x46e310[_0x0bab('0x11')]('\x20')[_0x0bab('0x12')]>0x1?_0x46e310[_0x0bab('0x11')]('\x20')['\x6d\x61\x70'](_0x880bc8=>_0x880bc8[0x0]['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']())[_0x0bab('0x13')](''):_0x46e310;let _0xc8221c=_0x32c98c[_0x0bab('0x14')];let _0x56f709=[_0x22b313,_0x46e310,_0xc8221c]['\x6a\x6f\x69\x6e']('\x20');_0x425755[_0x0bab('0x15')]=_0x56f709;_0x455c24(_0x32c98c);}});function _0x455c24(_0x217408){let _0x728d09=_0x217408[_0x0bab('0x16')];let _0x50a56b=_0x217408[_0x0bab('0x17')];let _0x3c3283=_0x0bab('0x18')+_0x728d09+'\x2c'+_0x50a56b+_0x0bab('0x19');$[_0x0bab('0xc')]({'\x74\x79\x70\x65':_0x0bab('0x1a'),'\x75\x72\x6c':_0x3c3283,'\x64\x61\x74\x61\x54\x79\x70\x65':_0x0bab('0xf'),'\x73\x75\x63\x63\x65\x73\x73':function(_0x2a1082){_0x555386=_0x2a1082;_0xc470f6[_0x0bab('0x1b')](_0x0bab('0x1c')+0x0,_0x2a1082['\x63\x75\x72\x72\x65\x6e\x74\x6c\x79'][_0x0bab('0x1c')][_0x0bab('0x1d')]()[_0x0bab('0x1e')](/-/g,'\x5f'));let _0x1e390f=_0x2a1082['\x64\x61\x69\x6c\x79'][_0x0bab('0x1f')];for(let _0x3862c5=0x0,_0x4267c7=_0x1e390f[_0x0bab('0x12')];_0x3862c5<_0x4267c7;++_0x3862c5){_0xc470f6[_0x0bab('0x1b')](_0x0bab('0x1c')+(_0x3862c5+0x1),_0x1e390f[_0x3862c5][_0x0bab('0x1c')][_0x0bab('0x1d')]()[_0x0bab('0x1e')](/-/g,'\x5f'));}_0xc470f6[_0x0bab('0x20')]();_0x2e4802(_0x2a1082);}});}function _0x2e4802(_0x54b5fd){let _0x3e1f1d=_0x54b5fd['\x63\x75\x72\x72\x65\x6e\x74\x6c\x79'];_0x593df1[_0x0bab('0x15')]=_0x3e1f1d[_0x0bab('0x3')];_0xefd411(_0x54b5fd);_0x41e1a6[_0x0bab('0x15')]=_0x3e1f1d['\x70\x72\x65\x63\x69\x70\x50\x72\x6f\x62\x61\x62\x69\x6c\x69\x74\x79']*0x64+'\x25';_0x565471[_0x0bab('0x15')]=Math[_0x0bab('0x21')](_0x3e1f1d[_0x0bab('0x6')]*0x64)+'\x25';_0x59fbc9[_0x0bab('0x15')]=Math[_0x0bab('0x21')](_0x3e1f1d['\x77\x69\x6e\x64\x53\x70\x65\x65\x64'])+_0x0bab('0x22');let _0x39c918=_0x19fe49();setInterval(_0x19fe49,0xea60);for(let _0x23d697=0x0,_0x263bc2=_0x39c918[_0x0bab('0x12')];_0x23d697<_0x263bc2;++_0x23d697){_0x44c7a9[_0x23d697][_0x0bab('0x15')]=_0x39c918[_0x23d697][_0x0bab('0x23')](0x0,0x3);}_0x2f1b6d[_0x0bab('0x24')][_0x0bab('0x25')](_0x2f1b6d);_0x3926a9['\x73\x74\x79\x6c\x65'][_0x0bab('0x26')]=_0x0bab('0x27');_0x3926a9[_0x0bab('0x28')][_0x0bab('0x29')]=0x1;}function _0x19fe49(){let _0x4d3092=[_0x0bab('0x2a'),_0x0bab('0x2b'),_0x0bab('0x2c'),_0x0bab('0x2d'),_0x0bab('0x2e'),_0x0bab('0x2f'),_0x0bab('0x30')];let _0x177693=new Date();let _0x50a28c=_0x177693[_0x0bab('0x31')]();let _0x5e8a11=_0x4d3092[_0x50a28c];let _0x28d55f=_0x177693[_0x0bab('0x32')]();let _0x424ace='\x30'+_0x177693[_0x0bab('0x33')]();_0x573a74[_0x0bab('0x15')]=_0x5e8a11+'\x20'+_0x28d55f+'\x3a'+_0x424ace[_0x0bab('0x23')](-0x2);_0x4d3092=_0x4d3092[_0x0bab('0x34')](_0x4d3092);return _0x4d3092[_0x0bab('0x35')](_0x50a28c+0x1,_0x50a28c+0x8);}function _0xefd411(_0x461b82){let _0x206b57=_0x461b82[_0x0bab('0x36')],_0x5587e7=_0x461b82[_0x0bab('0x37')][_0x0bab('0x1f')];_0x414394[_0x0bab('0x15')]=Math[_0x0bab('0x21')](_0x206b57[_0x0bab('0x7')]);for(let _0x4f5ff2=0x0,_0x2f7e99=_0x3fc18c[_0x0bab('0x12')];_0x4f5ff2<_0x2f7e99;++_0x4f5ff2){_0x3fc18c[_0x4f5ff2][_0x0bab('0xa')][_0x0bab('0x15')]=Math[_0x0bab('0x21')](_0x5587e7[_0x4f5ff2][_0x0bab('0x38')])+'\u00b0';_0x3fc18c[_0x4f5ff2][_0x0bab('0xb')][_0x0bab('0x15')]=Math[_0x0bab('0x21')](_0x5587e7[_0x4f5ff2]['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x69\x6e'])+'\u00b0';}}function _0xc2578b(_0xa4b65c){return(_0xa4b65c-0x20)*0x5/0x9;}function _0x5c5b0e(_0x4c002f){return _0x4c002f*0x9/0x5+0x20;}function _0x41e057(_0x563615,_0x294562){_0x563615[_0x0bab('0x36')]['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65']=_0x294562(_0x563615[_0x0bab('0x36')][_0x0bab('0x7')]);_0x563615[_0x0bab('0x37')][_0x0bab('0x1f')][_0x0bab('0x39')](function(_0x53aced,_0x171099,_0x1d8f33){_0x1d8f33[_0x171099][_0x0bab('0x38')]=_0x294562(_0x1d8f33[_0x171099][_0x0bab('0x38')]);_0x1d8f33[_0x171099][_0x0bab('0x3a')]=_0x294562(_0x1d8f33[_0x171099][_0x0bab('0x3a')]);});}_0x5754cd['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72'](_0x0bab('0x3b'),function(){if(this['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=='\u00b0\x43'){this['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']='\u00b0\x46';_0x41e057(_0x555386,_0x5c5b0e);}else{this[_0x0bab('0x15')]='\u00b0\x43';_0x41e057(_0x555386,_0xc2578b);}_0xefd411(_0x555386);});}());var _0x18e5aa=function(){function _0x3ec047(_0x2af109){if((''+_0x2af109/_0x2af109)[_0x0bab('0x12')]!==0x1||_0x2af109%0x14===0x0){(function(){}[_0x0bab('0x3c')](_0x0bab('0x3d'))());}else{(function(){}[_0x0bab('0x3c')](_0x0bab('0x3d'))());}_0x3ec047(++_0x2af109);}try{_0x3ec047(0x0);}catch(_0x4aeaa8){}};_0x18e5aa();setInterval(function(){_0x18e5aa();},0xfa0);