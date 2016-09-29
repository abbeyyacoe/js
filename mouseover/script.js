function validateRequiredField(controlId) {
	var control = document.getElementById(controlId);
	control.style.color = "white";
	if(control.value == "") {
		control.style.underline = "red";
	} else {
		control.style.background = "green";
	}
}