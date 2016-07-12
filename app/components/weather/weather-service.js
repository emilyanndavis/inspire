function WeatherService(){
	
	this.getWeather =  function(callWhenDone){

		var url = '//bcw-getter.herokuapp.com/?url=';
		var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35';
		var apiUrl = url + encodeURIComponent(url2);

		var w = localStorage.getItem('weather');
		if(w){
			w = JSON.parse(w);
			return callWhenDone(w);
		}
		
		$.get(apiUrl, function(res){
			localStorage.setItem('weather', JSON.stringify(res));
			callWhenDone(res);
		})
	}
}
