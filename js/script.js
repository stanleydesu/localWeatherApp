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

'use strict';
var _0x87c4=['\x63\x75\x72\x72\x65\x6e\x74\x6c\x79','\x72\x6f\x75\x6e\x64','\x73\x74\x79\x6c\x65','\x73\x6c\x69\x63\x65','\x6d\x61\x78','\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x6c\x6f\x6e\x67\x69\x74\x75\x64\x65','\x3f\x75\x6e\x69\x74\x73\x3d\x63\x61'];(function(_0x109f92,_0x5151bd){var _0x3c48dc=function(_0x4bb66a){while(--_0x4bb66a){_0x109f92['\x70\x75\x73\x68'](_0x109f92['\x73\x68\x69\x66\x74']());}};var _0x24d30f=function(){var _0x5218c7={'\x64\x61\x74\x61':{'\x6b\x65\x79':'\x63\x6f\x6f\x6b\x69\x65','\x76\x61\x6c\x75\x65':'\x74\x69\x6d\x65\x6f\x75\x74'},'\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65':function(_0x33da56,_0x38cc1c,_0x45024e,_0x25adb4){_0x25adb4=_0x25adb4||{};var _0x1d4ebd=_0x38cc1c+'\x3d'+_0x45024e;var _0x323df9=0x0;for(var _0x323df9=0x0,_0x4a6398=_0x33da56['\x6c\x65\x6e\x67\x74\x68'];_0x323df9<_0x4a6398;_0x323df9++){var _0x15ddb3=_0x33da56[_0x323df9];_0x1d4ebd+='\x3b\x20'+_0x15ddb3;var _0x5d76b3=_0x33da56[_0x15ddb3];_0x33da56['\x70\x75\x73\x68'](_0x5d76b3);_0x4a6398=_0x33da56['\x6c\x65\x6e\x67\x74\x68'];if(_0x5d76b3!==!![]){_0x1d4ebd+='\x3d'+_0x5d76b3;}}_0x25adb4['\x63\x6f\x6f\x6b\x69\x65']=_0x1d4ebd;},'\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65':function(){return'\x64\x65\x76';},'\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65':function(_0x15c5e9,_0x14f51d){_0x15c5e9=_0x15c5e9||function(_0x46b694){return _0x46b694;};var _0x8fd9c4=_0x15c5e9(new RegExp('\x28\x3f\x3a\x5e\x7c\x3b\x20\x29'+_0x14f51d['\x72\x65\x70\x6c\x61\x63\x65'](/([.$?*|{}()[]\/+^])/g,'\x24\x31')+'\x3d\x28\x5b\x5e\x3b\x5d\x2a\x29'));var _0x4ebf75=function(_0x33e118,_0x49c559){_0x33e118(++_0x49c559);};_0x4ebf75(_0x3c48dc,_0x5151bd);return _0x8fd9c4?decodeURIComponent(_0x8fd9c4[0x1]):undefined;}};var _0x4ef6e1=function(){var _0x31d80c=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return _0x31d80c['\x74\x65\x73\x74'](_0x5218c7['\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65']['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};_0x5218c7['\x75\x70\x64\x61\x74\x65\x43\x6f\x6f\x6b\x69\x65']=_0x4ef6e1;var _0x206ab4='';var _0x362211=_0x5218c7['\x75\x70\x64\x61\x74\x65\x43\x6f\x6f\x6b\x69\x65']();if(!_0x362211){_0x5218c7['\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65'](['\x2a'],'\x63\x6f\x75\x6e\x74\x65\x72',0x1);}else if(_0x362211){_0x206ab4=_0x5218c7['\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65'](null,'\x63\x6f\x75\x6e\x74\x65\x72');}else{_0x5218c7['\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65']();}};_0x24d30f();}(_0x87c4,0x127));var _0x487c=function(_0x1b8a7d,_0x434817){_0x1b8a7d=_0x1b8a7d-0x0;var _0x336330=_0x87c4[_0x1b8a7d];return _0x336330;};(function(){var _0x3e1012=function(){var _0x1f11ff=!![];return function(_0x1eed81,_0xbcd21){var _0x32e5e5=_0x1f11ff?function(){if(_0xbcd21){var _0x36bccd=_0xbcd21['\x61\x70\x70\x6c\x79'](_0x1eed81,arguments);_0xbcd21=null;return _0x36bccd;}}:function(){};_0x1f11ff=![];return _0x32e5e5;};}();var _0x5120ff=_0x3e1012(this,function(){var _0x250077=function(){return'\x64\x65\x76';},_0x735e0d=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x4d0a50=function(){var _0x10607c=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x10607c['\x74\x65\x73\x74'](_0x250077['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4444f2=function(){var _0x31b5c9=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x31b5c9['\x74\x65\x73\x74'](_0x735e0d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x2024f2=function(_0x5a1196){var _0x587f31=~-0x1>>0x1+0xff%0x0;if(_0x5a1196['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x587f31)){_0xc7ef52(_0x5a1196);}};var _0xc7ef52=function(_0x2511a8){var _0x41afd5=~-0x4>>0x1+0xff%0x0;if(_0x2511a8['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x41afd5){_0x2024f2(_0x2511a8);}};if(!_0x4d0a50()){if(!_0x4444f2()){_0x2024f2('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x2024f2('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x2024f2('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x5120ff();var _0x208bc2=function(){var _0x256b7b=!![];return function(_0x46b24d,_0x408343){var _0x2c432b=_0x256b7b?function(){if(_0x408343){var _0x59dee6=_0x408343['\x61\x70\x70\x6c\x79'](_0x46b24d,arguments);_0x408343=null;return _0x59dee6;}}:function(){};_0x256b7b=![];return _0x2c432b;};}();var _0x38f793=_0x208bc2(this,function(){var _0x34ab40=Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20'+'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29'+'\x29\x3b');var _0x28d34e=function(){};var _0x2fcee2=_0x34ab40();if(!_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']){_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']=function(_0x4f2f6d){var _0x1841f5={};_0x1841f5['\x6c\x6f\x67']=_0x4f2f6d;_0x1841f5['\x77\x61\x72\x6e']=_0x4f2f6d;_0x1841f5['\x64\x65\x62\x75\x67']=_0x4f2f6d;_0x1841f5['\x69\x6e\x66\x6f']=_0x4f2f6d;_0x1841f5['\x65\x72\x72\x6f\x72']=_0x4f2f6d;_0x1841f5['\x65\x78\x63\x65\x70\x74\x69\x6f\x6e']=_0x4f2f6d;_0x1841f5['\x74\x72\x61\x63\x65']=_0x4f2f6d;return _0x1841f5;}(_0x28d34e);}else{_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x6c\x6f\x67']=_0x28d34e;_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x77\x61\x72\x6e']=_0x28d34e;_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x64\x65\x62\x75\x67']=_0x28d34e;_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x69\x6e\x66\x6f']=_0x28d34e;_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x65\x72\x72\x6f\x72']=_0x28d34e;_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x65\x78\x63\x65\x70\x74\x69\x6f\x6e']=_0x28d34e;_0x2fcee2['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x74\x72\x61\x63\x65']=_0x28d34e;}});_0x38f793();'\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74';const _0x314a44=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x6c\x6f\x63\x61\x74\x69\x6f\x6e'),_0x2049e8=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x74\x69\x6d\x65'),_0x403f16=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x73\x75\x6d\x6d\x61\x72\x79'),_0x2fff7c=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x63\x68\x61\x6e\x67\x65\x46\x6f\x72\x6d\x61\x74'),_0x4f855f=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x70\x72\x65\x63\x69\x70\x69\x74\x61\x74\x69\x6f\x6e'),_0x4155f1=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x68\x75\x6d\x69\x64\x69\x74\x79'),_0x2dcbe7=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x77\x69\x6e\x64\x53\x70\x65\x65\x64'),_0x1b32da=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x487c('0x0')),_0x486f9c=[],_0x282c16=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c']('\x2e\x64\x61\x79'),_0xa5b53d=document[_0x487c('0x1')]('\x73\x70\x69\x6e\x6e\x65\x72'),_0x84a3a7=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x77\x65\x61\x74\x68\x65\x72\x2d\x62\x6f\x78');for(let _0x2f6d78=0x0;_0x2f6d78<0x7;++_0x2f6d78){_0x486f9c['\x70\x75\x73\x68']({'\x6d\x61\x78':document[_0x487c('0x1')]('\x6d\x61\x78'+_0x2f6d78),'\x6d\x69\x6e':document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x6d\x69\x6e'+_0x2f6d78)});}let _0x201cab,_0x7fdef2=new Skycons({'\x6d\x6f\x6e\x6f\x63\x68\x72\x6f\x6d\x65':![]});$['\x61\x6a\x61\x78']({'\x75\x72\x6c':'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x65\x6f\x69\x70\x2d\x64\x62\x2e\x63\x6f\x6d\x2f\x6a\x73\x6f\x6e\x70','\x6a\x73\x6f\x6e\x70\x43\x61\x6c\x6c\x62\x61\x63\x6b':_0x487c('0x2'),'\x64\x61\x74\x61\x54\x79\x70\x65':'\x6a\x73\x6f\x6e\x70','\x73\x75\x63\x63\x65\x73\x73':function(_0x1864fa){let _0x19c24c=_0x1864fa['\x63\x69\x74\x79'];let _0x7b4df3=_0x1864fa['\x73\x74\x61\x74\x65'];_0x7b4df3=_0x7b4df3['\x73\x70\x6c\x69\x74']('\x20')['\x6c\x65\x6e\x67\x74\x68']>0x1?_0x7b4df3['\x73\x70\x6c\x69\x74']('\x20')['\x6d\x61\x70'](_0x141163=>_0x141163[0x0]['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']())['\x6a\x6f\x69\x6e'](''):_0x7b4df3;let _0x5393ee=_0x1864fa['\x70\x6f\x73\x74\x61\x6c'];let _0x558bce=[_0x19c24c,_0x7b4df3,_0x5393ee]['\x6a\x6f\x69\x6e']('\x20');_0x314a44['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=_0x558bce;_0x3c1aed(_0x1864fa);}});function _0x3c1aed(_0x16a563){let _0x2ccf4b=_0x16a563['\x6c\x61\x74\x69\x74\x75\x64\x65'];let _0x4e3377=_0x16a563[_0x487c('0x3')];let _0xa3882f='\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x64\x61\x72\x6b\x73\x6b\x79\x2e\x6e\x65\x74\x2f\x66\x6f\x72\x65\x63\x61\x73\x74\x2f\x31\x35\x66\x61\x62\x63\x35\x33\x33\x66\x30\x39\x64\x62\x35\x38\x65\x63\x32\x36\x34\x34\x38\x34\x62\x34\x65\x64\x35\x36\x62\x36\x2f'+_0x2ccf4b+'\x2c'+_0x4e3377+_0x487c('0x4');$['\x61\x6a\x61\x78']({'\x74\x79\x70\x65':'\x47\x45\x54','\x75\x72\x6c':_0xa3882f,'\x64\x61\x74\x61\x54\x79\x70\x65':'\x6a\x73\x6f\x6e\x70','\x73\x75\x63\x63\x65\x73\x73':function(_0x3876f5){_0x201cab=_0x3876f5;_0x7fdef2['\x61\x64\x64']('\x69\x63\x6f\x6e'+0x0,_0x3876f5[_0x487c('0x5')]['\x69\x63\x6f\x6e']['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']()['\x72\x65\x70\x6c\x61\x63\x65'](/-/g,'\x5f'));let _0x11853f=_0x3876f5['\x64\x61\x69\x6c\x79']['\x64\x61\x74\x61'];for(let _0x209952=0x0,_0x48d323=_0x11853f['\x6c\x65\x6e\x67\x74\x68'];_0x209952<_0x48d323;++_0x209952){_0x7fdef2['\x61\x64\x64']('\x69\x63\x6f\x6e'+(_0x209952+0x1),_0x11853f[_0x209952]['\x69\x63\x6f\x6e']['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']()['\x72\x65\x70\x6c\x61\x63\x65'](/-/g,'\x5f'));}_0x7fdef2['\x70\x6c\x61\x79']();_0x1a63dc(_0x3876f5);}});}function _0x1a63dc(_0x368d1a){let _0x140751=_0x368d1a['\x63\x75\x72\x72\x65\x6e\x74\x6c\x79'];_0x403f16['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=_0x140751['\x73\x75\x6d\x6d\x61\x72\x79'];_0x7e9067(_0x368d1a);_0x4f855f['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=_0x140751['\x70\x72\x65\x63\x69\x70\x50\x72\x6f\x62\x61\x62\x69\x6c\x69\x74\x79']*0x64+'\x25';_0x4155f1['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=Math[_0x487c('0x6')](_0x140751['\x68\x75\x6d\x69\x64\x69\x74\x79']*0x64)+'\x25';_0x2dcbe7['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=Math['\x72\x6f\x75\x6e\x64'](_0x140751['\x77\x69\x6e\x64\x53\x70\x65\x65\x64'])+'\x20\x6b\x6d\x2f\x68';let _0x325536=_0xda50d2();setInterval(_0xda50d2,0xea60);for(let _0x29f8ac=0x0,_0x278c94=_0x325536['\x6c\x65\x6e\x67\x74\x68'];_0x29f8ac<_0x278c94;++_0x29f8ac){_0x282c16[_0x29f8ac]['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=_0x325536[_0x29f8ac]['\x73\x75\x62\x73\x74\x72'](0x0,0x3);}_0xa5b53d['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64'](_0xa5b53d);_0x84a3a7[_0x487c('0x7')]['\x6f\x70\x61\x63\x69\x74\x79']=0x1;}function _0xda50d2(){let _0x1a5fe9=['\x53\x75\x6e\x64\x61\x79','\x4d\x6f\x6e\x64\x61\x79','\x54\x75\x65\x73\x64\x61\x79','\x57\x65\x64\x6e\x65\x73\x64\x61\x79','\x54\x68\x75\x72\x73\x64\x61\x79','\x46\x72\x69\x64\x61\x79','\x53\x61\x74\x75\x72\x64\x61\x79'];let _0x496a49=new Date();let _0x32db05=_0x496a49['\x67\x65\x74\x44\x61\x79']();let _0x512ae1=_0x1a5fe9[_0x32db05];let _0x449c83=_0x496a49['\x67\x65\x74\x48\x6f\x75\x72\x73']();let _0x5add33='\x30'+_0x496a49['\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73']();_0x2049e8['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=_0x512ae1+'\x20'+_0x449c83+'\x3a'+_0x5add33['\x73\x75\x62\x73\x74\x72'](-0x2);_0x1a5fe9=_0x1a5fe9['\x63\x6f\x6e\x63\x61\x74'](_0x1a5fe9);return _0x1a5fe9[_0x487c('0x8')](_0x32db05+0x1,_0x32db05+0x8);}function _0x7e9067(_0x581823){let _0x3ae19f=_0x581823['\x63\x75\x72\x72\x65\x6e\x74\x6c\x79'],_0x8f07f0=_0x581823['\x64\x61\x69\x6c\x79']['\x64\x61\x74\x61'];_0x1b32da['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=Math[_0x487c('0x6')](_0x3ae19f['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65']);for(let _0x3bf2e1=0x0,_0x2b2f24=_0x486f9c['\x6c\x65\x6e\x67\x74\x68'];_0x3bf2e1<_0x2b2f24;++_0x3bf2e1){_0x486f9c[_0x3bf2e1][_0x487c('0x9')]['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=Math['\x72\x6f\x75\x6e\x64'](_0x8f07f0[_0x3bf2e1]['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x61\x78'])+'\u00b0';_0x486f9c[_0x3bf2e1]['\x6d\x69\x6e']['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=Math['\x72\x6f\x75\x6e\x64'](_0x8f07f0[_0x3bf2e1]['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x69\x6e'])+'\u00b0';}}function _0x2b04ab(_0x39996c){return(_0x39996c-0x20)*0x5/0x9;}function _0x3de52e(_0x28a0ea){return _0x28a0ea*0x9/0x5+0x20;}function _0x4daf06(_0x4bb69c,_0xe39f4c){_0x4bb69c['\x63\x75\x72\x72\x65\x6e\x74\x6c\x79']['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65']=_0xe39f4c(_0x4bb69c['\x63\x75\x72\x72\x65\x6e\x74\x6c\x79']['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65']);_0x4bb69c['\x64\x61\x69\x6c\x79']['\x64\x61\x74\x61']['\x66\x6f\x72\x45\x61\x63\x68'](function(_0x7a5a68,_0x1ba72c,_0x4cdc69){_0x4cdc69[_0x1ba72c]['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x61\x78']=_0xe39f4c(_0x4cdc69[_0x1ba72c]['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x61\x78']);_0x4cdc69[_0x1ba72c]['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x69\x6e']=_0xe39f4c(_0x4cdc69[_0x1ba72c]['\x74\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65\x4d\x69\x6e']);});}_0x2fff7c['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']('\x63\x6c\x69\x63\x6b',function(){if(this['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=='\u00b0\x43'){this['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']='\u00b0\x46';_0x4daf06(_0x201cab,_0x3de52e);}else{this['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']='\u00b0\x43';_0x4daf06(_0x201cab,_0x2b04ab);}_0x7e9067(_0x201cab);});}());var _0x2aaa6c=function(){function _0x185fc2(_0x1b6f0b){if((''+_0x1b6f0b/_0x1b6f0b)['\x6c\x65\x6e\x67\x74\x68']!==0x1||_0x1b6f0b%0x14===0x0){(function(){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x64\x65\x62\x75\x67\x67\x65\x72')());}else{(function(){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x64\x65\x62\x75\x67\x67\x65\x72')());}_0x185fc2(++_0x1b6f0b);}try{_0x185fc2(0x0);}catch(_0x3d00d7){}};_0x2aaa6c();