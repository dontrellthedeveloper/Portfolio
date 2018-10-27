$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	let typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Web Developer.", "App Developer."],
		typeSpeed: 80,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

});