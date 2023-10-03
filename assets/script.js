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

const baliseArrowLeft = document.getElementById("carrousel_arrow_left");

const baliseArrowRight = document.getElementById("carrousel_arrow_right");

const bulletPointSelected = document.querySelector(".dot_selected");

const bulletPoint = document.querySelector(".dot");

let currentIndex = 0;

baliseArrowLeft.addEventListener("click", () => {
	if (currentIndex - 1 >= 0) {
		currentIndex--;
		showImage(currentIndex);
	}
	console.log('Vous avez cliqué à gauche')
})

baliseArrowRight.addEventListener("click", () => {
	if (currentIndex + 1 >= 3) {
		currentIndex++;
		showImage(currentIndex);
	}
	console.log('Vous avez cliqué à droite')
})


