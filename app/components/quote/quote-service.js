function QuoteService(){
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'https://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	//Do Not Edit above we have to go through the bcw-getter to access this api
	
	this.getQuote =  function(callWhenDone){
		$.get(apiUrl, function(res){
			//Now What?
			callWhenDone(res);
		})
	}
}
