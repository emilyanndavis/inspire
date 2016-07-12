(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		weather = JSON.parse(weather);
		var weatherElem = $('#weather');

		var location = weather.name;
		var tempInF = Math.round(weather.main.temp * (9/5) - 459.67) + '&deg;F';
		var tempInC = Math.round(weather.main.temp - 273.15) + '&deg;C';
		var humidity = weather.main.humidity;		
		var conditions = weather.weather[0].main;
		var conditionsDetail = weather.weather[0].description;
		var windInMph = Math.round(weather.wind.speed * 3600 / 1609.344);
		var windInKph = Math.round(weather.wind.speed * 3600 / 1000);
		var iconSrc = 'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';

		var templateImperial = 
			`<p>${location}</p> 
			<p>${tempInF}</p> 
			<img src="${iconSrc}" alt="${conditionsDetail}" /> 	
			<p>${conditions}</p>
			<p>${conditionsDetail}</p>
			<p>wind: ${windInMph} mph</p>
			<p>humidity: ${humidity}%</p> 
			<button type="button" class="btn btn-info" id="switch">Switch to Metric</button>`;

		var templateMetric = 
			`<p>${location}</p> 
			<p>${tempInC}</p> 
			<img src="${iconSrc}" alt="${conditionsDetail}" /> 		
			<p>${conditions}</p>
			<p>${conditionsDetail}</p>
			<p>wind: ${windInKph} kph</p>
			<p>${humidity}% humidity</p> 
			<button type="button" class="btn btn-info" id="switch">Switch to Imperial</button>`;

		weatherElem.empty();

		weatherElem.append(templateImperial);

		// switch to Celsius on click
		$(weatherElem).on('click', '#switch', function(){
			var buttonText = $(this).text();

			weatherElem.empty();

			if (buttonText == 'Switch to Metric') {
				$(weatherElem).append(templateMetric);
			} else {
				$(weatherElem).append(templateImperial);
			}
		});

	})
	
}())
