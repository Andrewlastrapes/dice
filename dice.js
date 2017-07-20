var $button = $(".button");
var $dice = $(".dice"); 




function randomNum(){
	var number = [];
	number.push(Math.ceil(Math.random() * 6))
	return one()
}


function one(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "one.png"
	});

	imgOne.appendTo($('.dice'))
}

function two(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "two.png"
	});

	imgOne.appendTo($('.dice'))
}

function three(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "three.png"
	});

	imgOne.appendTo($('.dice'))
}

function four(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "four.png"
	});

	imgOne.appendTo($('.dice'))
}

function five(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "five.png"
	});

	imgOne.appendTo($('.dice'))
}

function six(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "six.png"
	});

	imgOne.appendTo($('.dice'))
}




function roll(fun){
	var x = fun()
	$dice.text(x) 
}


function click(thebutton){
	thebutton.on("click", function(event){
		event.preventDefault();
		roll(randomNum)
	})
}


var imageDice = []
var imageDice = {
	1: "one.png",
	2: "two.png",
	3: "three.png",
	4: "four.png",
	5: "five.png",
	6: "six.png"

}


click($button)