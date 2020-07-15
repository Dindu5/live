function validation() {
	let form = document.getElementById('form');
	let email = document.getElementById('id_email').value;
	let text = document.getElementById('text');
	var button = (document.getElementsByClassName('submitButton').disabled = true);
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	button.disabled = true;
	if (email.match(pattern)) {
		form.classList.add('valid');
		form.classList.remove('invalid');
		text.innerHTML = 'Your Email Address is Valid';
		text.style.color = '#00ff00';
		button.disabled = false;
	} else {
		form.classList.remove('valid');
		form.classList.add('invalid');
		text.innerHTML = 'Please Enter a Valid Mail Address';
		text.style.color = '#ff0000';
		button.disabled = true;
	}
	if (email == '') {
		form.classList.add('valid');
		form.classList.remove('invalid');
		text.innerHTML = '';
		text.style.color = '#ff0000';
		button.disabled = true;
	}
}
