(function(){
	console.log('ready');
	var imageService = new ImageService();
	imageService.getImage(function(image){
		image = JSON.parse(image);
		$('#wallpaper').css(`background-image`, `url(${image.url})`);
		$('#wallpaper').css(`background-size`, `cover`);		
	});
	
}())
