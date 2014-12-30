/**
 * Author : V Anshuman
 * Date : 29/12/2014
 * Name : Password Strength 
 */

var user_input = document.getElementById("userInput");
var submit = document.getElementById("submit");
var foo = user_input.value;
alert("haha");
//foo = "foo";
submit.onclick = function() { 
		foo = user_input.value;
		// Complex algorithm to express strength here
		var strength = 0;
		var complexity = 0;
		var seen = [];
		var i = 0;
		var special = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
		for (; i < foo.length; ++i) {
			var current = foo[i];
			
			if (!isNaN(parseInt(current,10))) {            //It is a digit
				if(!(seen.indexOf("digit") > -1)) {
					seen.push("digit");
					strength += 10;
				}
			} 
			else if (special.indexOf(current) != -1) {      // It is special Character
				if(!(seen.indexOf("special") > -1)) {
					seen.push("special");
					strength += 30;
				}
			}
			else if (current === current.toUpperCase()) {  //It is lowercase
				
				if(!(seen.indexOf("lower") > -1)) {
					seen.push("lower");
					strength += 26;
					
				}
			} else if (current === current.toLowerCase()) {  //It is uppercase
				if(!(seen.indexOf("upper") > -1)) {
					seen.push("upper");
					strength += 26;
				}
			} else {
				alert("IMpossible to reach!");
			}
		}
		complexity = Math.pow(strength, foo.length);
		//alert("Length: " + foo.length + "Strength: " + strength + "Complexity: " + complexity);
		// Calculating score as f(complexity)
		// Checkpoints : 0 - (52^8) - (52^12) - (62^12) - (92^15)
		var score = 0;
		var exponentials = [0, Math.pow(52,8), Math.pow(52,12), Math.pow(62,12), Math.pow(92,15)];
		var j = 0;
		for (j = 0; j < 5; ++j) {
			if (complexity < exponentials[j]) {
				break;
			}
			++score;
		}
		alert(score);
};
