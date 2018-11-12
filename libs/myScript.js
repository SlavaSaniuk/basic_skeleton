//Script variables:
var user_name; //User name;
var err_messages = [ //Array of error messages;
					"The name must contain a minimum of 5 characters",
					"The name must begin with a uppercase letter."
					];
var user = {	//Object, that represent a user account;
				name: null,
				password: null,
				getName: function() {
					return this.name;
				}
			};





//Script functions:
function myFunc() {
	if (validateName()) {
		user.name = document.getElementById("simple_form_name_field").value; //User name;
		document.getElementById("msg").innerHTML="Hello " +user.getName();
	}
	
}

/*
Functions for check name of valid:
*1)Must contain a minimum of 5 characters;
*2)The name must begin with a uppercase letter;
Return true - if name is valid. In otherwise return false.
*/
function validateName() {

	user_name = document.getElementById("simple_form_name_field").value; //Get user name:
	var first_character = user_name.charAt(0); //Get first character of name:

	//Validate name:
	//Check on statement 1;
	if(user_name.length < 5 ){ 

		this.displayErrorMessage(err_messages[0]); //Display "Must contain a minimum of 5 characters"
		return false;

	//Check on statement 2;
	}else if(first_character != first_character.toUpperCase()) { 

		this.displayErrorMessage(err_messages[1]); //Display "The name must begin with a uppercase letter;"
		return false;

	}else {
		hideErrorMessage();
		return true;
	}
}


/*
Functions to display error message:
*Set input border in red color;
*Display error message div;
*Set error message text;
*/
function displayErrorMessage(err_msg) {
	document.getElementById("simple_form_name_field").style.borderColor = "red";
	document.getElementById("simple_form_err_msg").style.display="block";
	document.getElementById("simple_form_err_msg").innerHTML = err_msg;
}

/*
Functions to display error message:
*Set input border in simple color;
*Hide error message div;
*Delete error message text;
*/
function hideErrorMessage() {
	document.getElementById("simple_form_name_field").style.borderColor = "#bfbfbf";
	document.getElementById("simple_form_err_msg").style.display="none";
	document.getElementById("simple_form_err_msg").innerHTML="";
}