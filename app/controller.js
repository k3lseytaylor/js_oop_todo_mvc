

function TodoListController(options){
	this.defaultOptions = {
		maxCharacters : options.maxCharacters || 160,
		dateElement : options.dateElement,
		titleElement : options.titleElement,
		descriptionElement : options.descriptionElement,
		submitElement : options.submitElement
	}
	this.init = function(){
		this.showAllItems();
	}
	this.showAllItems = function(){
		var items = this.model.readAll();
		this.view.displayItemList(items);
	}
	this.handleSubmitClick = function(){
		console.log('this is the controller submit click function');
		var errors;
		if((errors = this.view.checkValidInputs()).length>0){
			this.view.displayModalMessage(errors.join('<br>'));
		} else {
			var itemDetails = this.view.getItemDetails();
			debugger;
			this.model.create(itemDetails);
			this.view.displaySingleItem(itemDetails);
		}
	}
	this.view = new TodoView(options, this.handleSubmitClick.bind(this));  //talking with the user
	this.model = new TodoModel(); //talking with the server
	//destination agnostic




}