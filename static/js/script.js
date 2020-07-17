window.addEventListener('load', function() {
	const loader = document.querySelector('.loader');
	loader.classList.add('done');
	console.log('loading');
});

var modal = document.getElementById('mypopModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('cap');
img.onclick = function() {
	modal.style.display = 'block';
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('cancel')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

// modal 2

var modal1 = document.getElementById('mypopModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var modalImg1 = document.getElementById('img02');
var captionText1 = document.getElementById('cap1');

img1.onclick = function() {
	modal1.style.display = 'block';
	modalImg1.src = this.src;
	captionText1.innerHTML = this.alt;
};

var span1 = document.getElementsByClassName('cancel')[1];
span1.onclick = function() {
	modal1.style.display = 'none';
};

// modal 3

var modal2 = document.getElementById('mypopModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById('img03');
var captionText2 = document.getElementById('cap2');

img2.onclick = function() {
	modal2.style.display = 'block';
	modalImg2.src = this.src;
	captionText2.innerHTML = this.alt;
};

var span2 = document.getElementsByClassName('cancel')[2];
span2.onclick = function() {
	modal2.style.display = 'none';
};

// modal 4

var modal3 = document.getElementById('mypopModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById('img04');
var captionText3 = document.getElementById('cap3');

img3.onclick = function() {
	modal3.style.display = 'block';
	modalImg3.src = this.src;
	captionText3.innerHTML = this.alt;
};

var span3 = document.getElementsByClassName('cancel')[3];
span3.onclick = function() {
	modal3.style.display = 'none';
};

// modal 5

var modal4 = document.getElementById('mypopModal4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById('myImg4');
var modalImg4 = document.getElementById('img05');
var captionText4 = document.getElementById('cap4');

img4.onclick = function() {
	modal4.style.display = 'block';
	modalImg4.src = this.src;
	captionText4.innerHTML = this.alt;
};

var span4 = document.getElementsByClassName('cancel')[4];
span4.onclick = function() {
	modal4.style.display = 'none';
};

// modal 5

var modal5 = document.getElementById('mypopModal5');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById('myImg5');
var modalImg5 = document.getElementById('img06');
var captionText5 = document.getElementById('cap5');

img5.onclick = function() {
	modal5.style.display = 'block';
	modalImg5.src = this.src;
	captionText5.innerHTML = this.alt;
};

var span5 = document.getElementsByClassName('cancel')[5];
span5.onclick = function() {
	modal5.style.display = 'none';
};

$('#clock').countdown('2021/1/1', function(event) {
	var $this = $(this).html(
		event.strftime(
			'' +
				'<div><span>%w</span><span>Weeks</span></div>' +
				'<div><span>%d</span><span>Days</span></div>' +
				'<div><span>%H</span><span>Hr</span></div>' +
				'<div><span>%M</span><span>Min</span></div>' +
				'<div><span>%S</span><span>Sec</span></div>'
		)
	);
});

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
// Animations

gsap.registerPlugin(ScrollTrigger);

gsap.from('#myImg1', {
	scrollTrigger: {
		trigger: '#myImg1',
		toggleActions: 'restart pause resume pause'
	},
	opacity: 0,
	x: -500,
	duration: 3
});

gsap.from('#myImg', {
	scrollTrigger: {
		trigger: '#myImg',
		toggleActions: 'restart pause resume none'
	},
	opacity: 0,
	x: 500,
	duration: 3
});
gsap.from('#myImg2', {
	scrollTrigger: {
		trigger: '#myImg2',
		toggleActions: 'restart pause resume none'
	},
	opacity: 0,
	x: 500,
	duration: 3
});
gsap.from('#myImg3', {
	scrollTrigger: {
		trigger: '#myImg3',
		toggleActions: 'restart pause resume pause'
	},
	opacity: 0,
	x: -500,
	duration: 3
});
gsap.from('#myImg4', {
	scrollTrigger: {
		trigger: '#myImg4',
		toggleActions: 'restart pause resume none'
	},
	opacity: 0,
	x: 500,
	duration: 3
});
gsap.from('#myImg5', {
	scrollTrigger: {
		trigger: '#myImg5',
		toggleActions: 'restart pause resume pause'
	},
	opacity: 0,
	x: -500,
	duration: 3
});

window.addEventListener('load', function() {
	gsap.from('.header', {
		x: '50%',
		y: '10%',
		opacity: 0,
		scale: 0,
		duration: 3
	});
	gsap.from('.header-img', {
		x: 500,
		opacity: 0,
		scale: 0,
		duration: 3
	});
	gsap.from('.navigation', {
		y: -200,
		opacity: 0,
		duration: 3
	}),
		gsap.from('.main-text', {
			x: -500,
			opacity: 0,
			duration: 3,
			delay: 2
		}),
		gsap.from('.sub-text', {
			x: -500,
			opacity: 0,
			duration: 3,
			delay: 2
		}),
		gsap.from('.notify', {
			y: 50,
			opacity: 0,
			duration: 3,
			delay: 3
		});
});
