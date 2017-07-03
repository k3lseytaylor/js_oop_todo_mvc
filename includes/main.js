

$(document).ready(initializeApp);
var app = null;

function initializeApp(){
	var optionsObject = {
		dateElement : $("input[name='dueDate']"),
		titleElement : $("input[name='title'"),
		descriptionElement : $("input[name='description']"),
		submitElement : $("#submitTodo"),
		modalElement: $("#viewDialog"),
		displayElement: $("#itemDisplay"),
		maxCharacters: 100,
	}
	console.log(optionsObject);
	app = new TodoListController(optionsObject);
	app.init();
}