(function(){
	console.log('ready');
	var imageService = new ImageService();
	imageService.getImage(function(image){
		console.log(image.url);
		$('#wallpaper').css(`background-image`, `url(${image.url})`);
		$('#wallpaper').css(`background-size`, `cover`);		
	});
	
}())
