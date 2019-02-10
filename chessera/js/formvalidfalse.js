	$(document).ready(function() {
		$('#login_submit').click(function(e) {
		// Initializing Variables With Form Element Values
		//var firstname = $('#firstname').val();
		//var lastname = $('#lastname').val();
		//var addr = $('#addr').val();
		//var zip = $('#zip').val();
		//var state = $('#state').val();
		//var username = $('#username').val();
		var email = $('#username').val();
		var password = $('#password').val();
		//var confirm_password = $('#confirm_password').val();
		// Initializing Variables With Regular Expressions
		var name_regex = /^[a-zA-Z]+$/;
		var email_regex = /^[a-zA-Z]+$/;///^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
		var add_regex = /^[0-9a-zA-Z]+$/;
		var zip_regex = /^[0-9]+$/;
		// To Check Empty Form Fields.
	/*	if (firstname.length == 0) {
			$('#head').text("* firstname fields is mandatory *"); // This Segment Displays The Validation Rule For All Fields
			$("#firstname").focus();
			//alert("idiot enter name")
			return false;
		}
		 if (lastname.length == 0) {
			$('#head').text("*lastname fields is mandatory *"); // This Segment Displays The Validation Rule For All Fields
			$("#lastname").focus();
			return false;
		} */
		if (password.length == 0) {
			$('#v2').text("password field is mandatory "); // This Segment Displays The Validation Rule For All Fields
			$("#password").focus();
			//return false;
		}
		/* if (confirm_password.length == 0) {
			$('#head').text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
			$("#confirm_password").focus();
			return false;
		}*/
		 if (email.length == 0) {
			$('#v1').text("username fields is mandatory "); // This Segment Displays The Validation Rule For All Fields
			$("#username").focus();
			//return false;
		}
		// Validating Name Field.
	/*	else if (!firstname.match(name_regex) || firstname.length == 0) {
			//alert("idiot enter name")
			$('#p1').text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
			$("#firstname").focus();
			return false;
		}

		else if (!lastname.match(name_regex) || lastname.length == 0) {
			$('#p1').text("* For your lastname please use alphabets only *"); // This Segment Displays The Validation Rule For Name
			$("#lastname").focus();
			return false;
		}

		else if (!password.match(name_regex) || password.length == 0) {
			$('#display').text("* For your password please use alphabets only *"); // This Segment Displays The Validation Rule For Name
			$("#password").focus();
			return false;
		}
		else if (!confirm_password.match(name_regex) || confirm_password.length == 0) {
			$('#p1').text("* For your confirm_password please use alphabets only *"); // This Segment Displays The Validation Rule For Name
			$("#confirm_password").focus();
			return false;
		}
		// Validating Username Field.
		/*else if (!(username.length >= 6 && username.length <= 8) || username.length == 0) {
		$('#p2').text("* Please enter between 6 and 8 characters *"); // This Segment Displays The Validation Rule For Username
		$("#username").focus();
		return false;
		}*/
		// Validating Email Field.
		 if (!email.match(email_regex) || email.length == 0) {
		$('#p3').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
		$("#email").focus();
		//return false;
		}
		// Validating Select Field.
		/*else if (state == "Please Choose") {
		$('#p4').text("* Please Choose any one option"); // This Segment Displays The Validation Rule For Selection
		$("#state").focus();
		return false;
		}
		// Validating Address Field.
		else if (!addr.match(add_regex) || addr.length == 0) {
		$('#p5').text("* For Address please use numbers and letters *"); // This Segment Displays The Validation Rule For Address
		$("#addr").focus();
		return false;
		}
		// Validating Zip Field.
		else if (!zip.match(zip_regex) || zip.length == 0) {
		$('#p6').text("* Please enter a valid zip code *"); // This Segment Displays The Validation Rule For Zip
		$("#zip").focus();
		return false;
		} else {
		alert("Form Submitted Successfuly!");
		return true;
		}*/
		});
	});