function ImageService (){
	this.getImage =  function(callWhenDone){

		var url = '//bcw-getter.herokuapp.com/?url=';
		var url2 = 'http://www.splashbase.co/api/v1/images/random';
		var apiUrl = url + encodeURIComponent(url2);
		
		return $.get(apiUrl, function(res){
			callWhenDone(res);
		});
	}
}
