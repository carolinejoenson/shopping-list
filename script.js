var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var existingItems = document.querySelectorAll("li")

function inputLength() {
	return input.value.length;
}

//create new list item with toggle//
function createListElement() {
	var li = document.createElement("li");
	li.addEventListener("click", function(){
		this.classList.toggle("done");
	});
	//create button for new list item//
	var newButtons = document.createElement("button");
	newButtons.innerHTML ="Delete";
	newButtons.addEventListener("click", function(){
		this.parentElement.remove();
	});
	//append new list item and button//	
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(newButtons);
	ul.appendChild(li);
	input.value = "";
}

//add new item to list after click//
function addToListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
button.addEventListener("click", addToListAfterClick);

//add new item to list after enter//
function addToListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
input.addEventListener("keypress", addToListAfterKeypress);

//create buttons and apply toggle to existing list items//
Array.from(existingItems).forEach(function(existingItems){
	var newButtons = document.createElement("button");
	newButtons.innerHTML ="Delete";
	existingItems.appendChild(newButtons);	
	newButtons.addEventListener("click", function(){
		this.parentElement.remove();
	});
	existingItems.addEventListener("click", function(){
		this.classList.toggle("done");
	});
});