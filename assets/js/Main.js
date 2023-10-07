

var typed = new Typed(".text", {
	strings: ["Student at Binus University"],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth'
			});
		}
	});
});

$(".step").click(function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click(function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menu_items.forEach(item => {
	item.addEventListener('click', function() {
		close();
	})
})

function show() {
	mainMenu.style.display = 'flex';
	mainMenu.style.top = '0';
}

function close() {
	mainMenu.style.top = '-100%';
}



"use strict";

function qs(selector, all = false) {
	return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
	const {
		scrollY
	} = window;
	up = scrollY < prevScrollY;
	down = !up;
	const timelineRect = timeline.getBoundingClientRect();
	const lineRect = line.getBoundingClientRect();

	const dist = targetY - timelineRect.top;
	console.log(dist);

	if (down && !full) {
		set = Math.max(set, dist);
		line.style.bottom = `calc(100% - ${set}px)`;
	}

	if (dist > timeline.offsetHeight + 50 && !full) {
		full = true;
		line.style.bottom = `-50px`;
	}

	sections.forEach(item => {
		// console.log(item);
		const rect = item.getBoundingClientRect();

		if (rect.top + item.offsetHeight / 5 < targetY) {
			item.classList.add('show-me');
		}
	});

	prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);


$(window).on('load', function() {
	$(".loading").addClass('endLoading').fadeOut(2000)
})

	

  

