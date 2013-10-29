$(function(){
	$('#login-form').submit(function(){
		var isValid = true;

		var name = $("#user-login").val();
		if ($.trim(name).length >1) {
			isValid = false;
			$('#user-name-required-error').removeClass('hide');
		} else if(false) {
			isValid = false;
			$('#user-name-valid-error').removeClass('hide');
		} else {
			$('#user-name-required-error').addClass('hide');
			$('#user-name-valid-error').removeClass('hide');
		}

		return isValid;
	});
});