var $button = $(".button");
var $dice = $(".dice"); 




function randomNum(){
	
	var number = [];
	number.push(Math.ceil(Math.random() * 6))
	if  (number == "1"){
		one();
		}	
	else if  (number == "2"){
		two();
		}	
	else if  (number == "3"){
		three();
		}
	else if  (number == "4"){
		four();
		
		}
	else if  (number == "5"){
		five();
		
		}
	else if  (number == "6"){
		six();
		}
	}
	
	



function one(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "one.png"
	});
	$(".dice").empty();
	imgOne.appendTo($('.dice'))
}

function two(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "two.png"
	});
	$(".dice").empty();
	imgOne.appendTo($('.dice'))
}

function three(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "three.png"
	});
	$(".dice").empty();
	imgOne.appendTo($('.dice'))
}

function four(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "four.png"
	});
	$(".dice").empty();
	imgOne.appendTo($('.dice'))
}

function five(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "five.png"
	});
	$(".dice").empty();
	imgOne.appendTo($('.dice'))
}

function six(){

	var imgOne = $('<img />', {
		"class": "dice",
		"src": "six.png"
	});
	$(".dice").empty();
	imgOne.appendTo($('.dice'))
}




function roll(fun){
	var x = fun();
	$dice.text(x);
}

function click(thebutton){
	thebutton.on("click", function(event){
		event.preventDefault();
		roll(randomNum)

	})
}



click($button)