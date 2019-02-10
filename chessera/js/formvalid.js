$(document).ready(function() {
		$('#login_submit').click(function(e) {
			var isFormValid = login_validate()
			if (isFormValid) {
				window.location.href = "admin_index.html"
			}
			else {

			}
			
			});
		$('#registration_submit').click(function(e) {
			var isFormValid = Reg_validate()
			if (isFormValid) {
				window.location.href = "admin_index.html"
			}
			else {

			}
			
			});
		function login_validate(){
			$('#v1').text("")
			$('#v2').text("")
			var email = $('#username').val();
			var password = $('#password').val();
			// Initializing Variables With Regular Expressions
			var name_regex = /^[a-zA-Z]+$/;
			var email_regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
			var add_regex = /^[0-9a-zA-Z]+$/;
			var zip_regex = /^[0-9]+$/;

			var count = 0

			if (email.length == 0) {
				$('#v1').text("username fields is mandatory "); // This Segment Displays The Validation Rule For All Fields
				//$("#username").focus();
				count++;			
			}
			else if (!email.match(email_regex) /*|| email.length == 0*/) {
				$('#v1').text("Please enter a valid email address "); // This Segment Displays The Validation Rule For Email
				//$("#email").focus();
				count++;
			}
			if (password.length == 0) {
				$('#v2').text("password field is mandatory "); // This Segment Displays The Validation Rule For All Fields
				//$("#password").focus();
				count++;
			}
			else if (!password.match(add_regex) || password.length == 0) {
				//alert("idiot enter name")
				$('#v2').text("* For your password please use alphabets numeric and $ only *"); // This Segment Displays The Validation Rule For Name
				//$("#password").focus();
				count++;
			}

			if (count > 0) 
				return false
			else
				return true
		}

		//Registration Validation



		function Reg_validate(){

			$('#r1').text("")
			$('#r2').text("")
			$('#r3').text("")
			$('#r4').text("")
			$('#r5').text("")
			
			var firstname = $('#firstname').val();
			var lastname = $('#lastname').val();
			var email_r = $('#usrname').val();
			var password_r = $('#pass').val();
			var confirm_password = $('#confirm_password').val();
			// Initializing Variables With Regular Expressions
			var name_regex = /^[a-zA-Z]+$/;
			var email_regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
			var add_regex = /^[0-9a-zA-Z]+$/;
			var zip_regex = /^[0-9]+$/;

			var count = 0

			if (firstname.length == 0) {
				$('#r1').text("firstname field is mandatory "); // This Segment Displays The Validation Rule For All Fields
				//$("#password").focus();
				count++;
			}
			else if (!firstname.match(name_regex) || firstname.length == 0) {
				//alert("idiot enter name")
				$('#r1').text("* For your firstname please use alphabets numeric and $ only *"); // This Segment Displays The Validation Rule For Name
				//$("#password").focus();
				count++;
			}
			if (lastname.length == 0) {
				$('#r2').text("lastname field is mandatory "); // This Segment Displays The Validation Rule For All Fields
				//$("#password").focus();
				count++;
			}
			else if (!lastname.match(name_regex) || lastname.length == 0) {
				//alert("idiot enter name")
				$('#r2').text("* For your lastname please use alphabets numeric and $ only *"); // This Segment Displays The Validation Rule For Name
				//$("#password").focus();
				count++;
			}


			if (email_r.length == 0) {
				$('#r3').text("username fields is mandatory "); // This Segment Displays The Validation Rule For All Fields
				//$("#username").focus();
				count++;			
			}
			else if (!email_r.match(email_regex) || email_r.length == 0) {
				$('#r3').text("Please enter a valid email address ");  
				
				count++;
			}
			if (password_r.length == 0) {
				$('#r4').text("password field is mandatory "); // This Segment Displays The Validation Rule For All Fields
				//$("#password").focus();
				count++;
			}
			else if (!password_r.match(add_regex) || password_r.length == 0) {
				//alert("idiot enter name")
				$('#r4').text("For your password please use alphabets numeric and $ only "); // This Segment Displays The Validation Rule For Name
				//$("#password").focus();
				count++;
			}
			if (confirm_password.length == 0) {
				$('#r5').text("confirm_password field is mandatory "); // This Segment Displays The Validation Rule For All Fields
				//$("#password").focus();
				count++;
			}
			else if (!confirm_password.match(add_regex) || confirm_password.length == 0) {
				//alert("idiot enter name")
				$('#r5').text("* For your confirm_password please use alphabets numeric and $ only *"); // This Segment Displays The Validation Rule For Name
				//$("#password").focus();
				count++;
			}

			if (count > 0) 
				return false
			else
				return true
		}
	});