

function TodoView(options, submitCallback){
	this.options = options;
	this.submitButton = options.submitElement;
	this.submitHandler = submitCallback;
	
	this.init = function(){
		this.applyClickHandlers();
	}
	this.applyClickHandlers = function(){
		this.submitButton.on('click',submitCallback);
	}
	this.checkValidInputs = function(){
		var errors = [];
		if(this.options.titleElement.val().length < 2){
			errors.push('title must be greater than 2 characters');
		}
		if(this.options.descriptionElement.val().length < 3){
			errors.push('item description must be greater than 3 characters');
		} else if(this.options.descriptionElement.val().length > this.options.maxCharacters){
			errors.push('item description cannot be greater than '+this.options.maxCharacters + ' characters long');
		}
		return errors;
	}
	this.displayModalMessage = function(message){
		this.options.modalElement.find('.modal-body').html(message);
		this.options.modalElement.modal("show");
	}
	this.getItemDetails = function(){
		var outputObject = {};
		outputObject[this.options.titleElement.attr('name')]= this.options.titleElement.val(),
		outputObject[this.options.dateElement.attr('name')]= this.options.dateElement.val(),
		outputObject[this.options.descriptionElement.attr('name')]= this.options.descriptionElement.val()
		return outputObject;
	}
	this.displayItemList = function(items){
		var elementsToAppend = [];
		for(var i=0; i<items.length; i++){
			elementsToAppend.push(this.createSingleItem(items[i]));
		}
		this.attachToDisplay(elementsToAppend);
	}
	this.attachToDisplay = function(elements){
		this.options.displayElement.append(elements);		
	}
	this.displaySingleItem = function(item){
		var element = this.createSingleItem(item);
		this.attachToDisplay(element);
	}
	this.createSingleItem = function(item){
		var someElement = item;
		var newElement = $("#itemTemplate").clone();
		newElement.prop('ID',"").removeClass('hidden');
		newElement[0].itemData = item;
		//newElement.find('*').each(function(){
		var children = newElement[0].querySelectorAll('*')
		for(var i=0; i<children.length; i++){

			var text = children[i].innerHTML;
			var start = text.indexOf('{{');
			var end = text.indexOf('}}');
			if(start!==-1 && end!==-1 && start<end){
				;
				var field = text.substring(start+2,end);
				text = text.substring(0,start-1) + item[field] + text.substring(end+2);
				children[i].innerHTML = text;
				//text = text.substing(0,start-1) +
			}
		}
		return newElement;
	}
	this.init();
}