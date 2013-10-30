$(function(){
	var loginRegex = /^(?=\w{6,30}$).*/;

	$('#login-form').submit(function(){
		var isValid = true;

		var name = $("#user-login").val();
		if ($.trim(name).length <1) {
			isValid = false;
			$('#user-name-required-error').removeClass('hide');
			$('#user-name-valid-error').addClass('hide');
		} else if(!loginRegex.test(name)) {
			isValid = false;
			$('#user-name-valid-error').removeClass('hide');
			$('#user-name-required-error').addClass('hide');
		} else {
			$('#user-name-required-error').addClass('hide');
			$('#user-name-valid-error').addClass('hide');
		}

		var password = $("#user-pass").val();
		if ($.trim(password).length <1) {
			isValid = false;
			$('#password-required-error').removeClass('hide');
			$('#password-valid-error').addClass('hide');
		} else if(!loginRegex.test(password)) {
			isValid = false;
			$('#password-valid-error').removeClass('hide');
			$('#password-required-error').addClass('hide');
		} else {
			$('#password-required-error').addClass('hide');
			$('#password-valid-error').addClass('hide');
		}

		return isValid;
	});
});