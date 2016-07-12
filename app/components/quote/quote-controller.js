(function(){	
	var quoteService = new QuoteService();
	quoteService.getQuote(function(quote){
		quote = JSON.parse(quote);

		$('#quote').empty();
		$('#quote').append(
			`<p>"${quote.quote}"</p>`
		);

		$('#quote').on('mouseenter', function(){
			$(this).append(`<p>&mdash;${quote.author}</p>`);
		});

		$('#quote').on('mouseleave', function(){
			$(this).empty();
			$(this).append(`<p>"${quote.quote}"</p>`);
		});		

	});
	
}())
