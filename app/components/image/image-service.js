function ImageService (){
	this.getImage =  function(callWhenDone){
		return $.get('http://www.splashbase.co/api/v1/images/random', function(res){
			callWhenDone(res);
		});
	}
}
