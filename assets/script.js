const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let etape = 0;

let nbr__img = slides.length;

let precedent = document.querySelector('.arrow_left');
let suivant = document.querySelector('.arrow_right');
let image = document.getElementById("slide");
let textInfo = document.getElementById("textInfo");
const dots = document.querySelector(".dots");
const dotList = document.querySelectorAll(".dot");


/* Create bullet (dot) */ 
function showDots() {
  const dots = document.querySelector('.dots');
  for (let j = 0; j < nbr__img; j++) {
  const dot = document.createElement('span');
  dot.id='span' + j;
    dot.addEventListener('click', function(event) {
      etape = Number(event.target.id.replace('span', ''));
      showSlide();
});

  dot.classList.add('dot');
  dots.appendChild(dot);
  if (j == 0) { 
    dots.children[j].classList.add('dot_selected');
  }
}}
showDots();


/* Link bullet to image (dot) */
function selected() {
	const dot = document.getElementsByClassName('dot');
	for (let etape = 0; etape < dot.length; etape++) {
		dot[etape].classList.remove('dot_selected');
	}
	dot[etape].classList.add('dot_selected');
 }

/* Link tagline and image to HTML*/
function showSlide() {
  image.setAttribute("src","./assets/images/slideshow/" + slides[etape].image);
	document.getElementById("textInfo").innerHTML = slides[etape].tagLine;
	selected();
}

/* Call function to move arrowleft */
precedent.addEventListener("click", function () {
	if (etape == 0) {
		etape = nbr__img - 1;
	}
	else {
		etape--;
	}showSlide();
});

/* Call function to move arrowRight */	
suivant.addEventListener("click", function () {
	if (etape === nbr__img - 1) {
		etape = 0;
	} else {
    etape++;
	}showSlide();
});