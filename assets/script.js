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

const addSelected = () => {
    for (let dot = 0; dot < nbr__img; dot++) {
      dotList[dot].classList.remove("dot_selected");

      if (dot === etape) {
        dotList[dot].classList.add("dot_selected");
      }
    }
  };

suivant.addEventListener('click', function() {
    etape++;

    if(etape >= nbr__img) {
        etape = 0;
    }

    image.setAttribute("src","./assets/images/slideshow/" + slides[etape].image);
	  document.getElementById("textInfo").innerHTML = slides[etape].tagLine;
    addSelected(etape);

})

precedent.addEventListener('click', function() {
    etape--;

    if(etape < 0) {
        etape = nbr__img - 1;
    }

    image.setAttribute("src","./assets/images/slideshow/" + slides[etape].image);
	  document.getElementById("textInfo").innerHTML = slides[etape].tagLine;
    addSelected(etape);
})