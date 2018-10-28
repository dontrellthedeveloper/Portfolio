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

	$('.owl-carousel').owlCarousel({
		loop:true,
		items: 4,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			938:{
				items:4
			}
		}
	});




	let skillsTopOffset = $(".skillsSection").offset().top;
	let statsTopOffset = $(".statsSection").offset().top;
	let countUpFinished = false;


	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}

		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter1").countup(2);
			$(".counter2").countup(12);
			$(".counter3").countup(8);
			$(".counter4").countup(5);
			countUpFinished = true;
		}
		
	});
});



