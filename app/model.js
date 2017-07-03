

function TodoModel(){
	this.dbObject = null;
	this.init = function(){
		if(localStorage.todoDB === undefined){
			this.initDB();
		} else {
			this.readDB();
		}
	}
	this.initDB = function(){
		this.dbObject = {
			items: []
		}
		this.saveDB();
	}
	this.saveDB = function(){
		localStorage.todoDB = JSON.stringify(this.dbObject);
	}
	this.readDB = function(){
		this.dbObject = JSON.parse(localStorage.todoDB);
	}
	this.create = function(item){
		item.status = 0;
		this.dbObject.items.push(item);
		this.saveDB();
	}
	this.readAll = function(){
		return this.dbObject.items;
	}
	this.init();
}