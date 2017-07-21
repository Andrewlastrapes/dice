var $button = $(".button");
var $dice = $(".dice"); 
var $dice2 = $(".dice2")
var $result = $(".result")


// Make a function that randomly generates a number between one and six for the first die. 

function randomNum(){
	
	
	var number = Math.ceil(Math.random() * 6);
	
	
	if  (number == 1){
		one();

		
		}	
	else if  (number == 2){
		two();
	
		}	
	else if  (number == 3){
		three();
		
		}
	else if  (number == 4){
		four();
		
		}
	else if  (number == 5){
		five();
		
		
		}
	else if  (number == 6){
		six();
		
		}
		return number;
	}
	
// Make a function that randomly generates a number between one and six for the second die. 

function randomNum2(){
	
	var number = Math.ceil(Math.random() * 6);
	
	if  (number == 1){
		seven();
		
		}	
	else if  (number == 2){
		eight();
		
		}	
	else if  (number == 3){
		nine();
		
		}
	else if  (number == 4){
		ten();
		
		}
	else if  (number == 5){
		eleven();
		
		}
	else if  (number == 6){
		twelve();
		
		}
		return number
	}


// Links random number to png images. 

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


function seven(){

	var imgOne = $('<img />', {
		"class": "dice2",
		"src": "one.png"
	});
	$(".dice2").empty();
	imgOne.appendTo($('.dice2'))
}

function eight(){

	var imgOne = $('<img />', {
		"class": "dice2",
		"src": "two.png"
	});
	$(".dice2").empty();
	imgOne.appendTo($('.dice2'))
}

function nine(){

	var imgOne = $('<img />', {
		"class": "dice2",
		"src": "three.png"
	});
	$(".dice2").empty();
	imgOne.appendTo($('.dice2'))
}

function ten(){

	var imgOne = $('<img />', {
		"class": "dice2",
		"src": "four.png"
	});
	$(".dice2").empty();
	imgOne.appendTo($('.dice2'))
}

function eleven(){

	var imgOne = $('<img />', {
		"class": "dice2",
		"src": "five.png"
	});
	$(".dice2").empty();
	imgOne.appendTo($('.dice2'))
}

function twelve(){

	var imgOne = $('<img />', {
		"class": "dice2",
		"src": "six.png"
	});
	$(".dice2").empty();
	imgOne.appendTo($('.dice2'))
}



function roll2(fun){
	var x = fun();
	
}


function roll(fun){
	var x = fun();
	
}



function click(thebutton){
	thebutton.on("click", function(event){
		event.preventDefault();
		roll(randomNum);
		roll2(randomNum2);
		$result.text(randomNum() + randomNum2())
	})
}


click($button)