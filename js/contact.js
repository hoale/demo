$(function(){
	var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	$('#contact-form').submit(function(){
		var isValid = true;

		var name = $("#name").val();
		if ($.trim(name).length < 1) {
			isValid = false;
			$('#name-required-error').removeClass('hide');
		} else {
			$('#name-required-error').addClass('hide');
		}

		var email = $("#email").val();
		if ($.trim(email).length < 1) {
			isValid = false;
			$('#email-required-error').removeClass('hide');
			$('#email-valid-error').addClass('hide');
		} else if (!emailRegex.test(email)) {
			isValid = false;
			$('#email-valid-error').removeClass('hide');
			$('#email-required-error').addClass('hide');
		} else {
			$('#email-required-error').addClass('hide');
			$('#email-valid-error').addClass('hide');
		}

		var message = $("#message").val();
		if ($.trim(message).length < 1) {
			isValid = false;
			$('#message-required-error').removeClass('hide');
		} else {
			$('#message-required-error').addClass('hide');
		}

		return isValid;

	});
});