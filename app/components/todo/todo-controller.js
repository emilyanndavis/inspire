(function(){
	var todoService = new TodoService();

	var todoList = todoService.getTodos();	

	update();

	$('#todo form').on('submit', function(event){
		event.preventDefault();
		var form = this;
		var item = form.item.value;
		// add to todoList array
		todoList.push(item);
		todoService.saveTodos(todoList);
		// add to display
		update();
	});

	$('#list-display').on('click', '.checkbox', function(){
		// remove from todoList array
		var index = this.id;
		console.log(index);
		todoList.splice(index, 1);
		todoService.saveTodos(todoList);
		// remove from display
		$(this).addClass('animated hinge');
		setTimeout(function(){
			update();
		}, 2000);
	});

	function update() {
		$('#list-display').empty();
		// show number of items
		if (todoList.length == 1) {
			$('#list-display').append(`<h5>You have 1 thing to do</h5>`);
		} else if (todoList.length > 1) {
			$('#list-display').append(`<h5>You have ${todoList.length} things to do</h5>`);
		}
		// append each item to list with a checkbox
		var id = 0;
		todoList.forEach(function(item){
			$('#list-display').append(
				`<div class="checkbox" id="${id}">
    				<label>
     				 	<input type="checkbox"> ${item}
   					</label>
  				</div>`
				);
			id++;
		});
	}
	
	
}())
