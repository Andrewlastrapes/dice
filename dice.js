var button = document.querySelector(".button");
var dice = document.querySelector(".dice"); 






function randomNum(){
	var number = [];
	number.push(Math.ceil(Math.random() * 6))
	return number
}


function roll(fun){
	var x = fun()
	dice.textContent = x
}


function click(thebutton){
	thebutton.addEventListener("click", function(event){
		event.preventDefault();
		roll(randomNum)
	})
}

click(button)