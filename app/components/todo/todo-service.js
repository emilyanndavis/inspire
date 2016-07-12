function TodoService(){
	this.getTodos =  function(){
		var t = localStorage.getItem('todo');
		if(t){
			return JSON.parse(t);
		}
		return [];
	}
	
	this.saveTodos =  function(todos){
				//^^^ Less typical but todos should always be the entire array
		localStorage.setItem('todo', JSON.stringify(todos));
	}
}
