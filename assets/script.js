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


const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
let image = document.getElementById("slide");
let textInfo = document.getElementById("textInfo");
let nbElement = slides.length - 1;
const dots = document.querySelector(".dot");

let numero = 0
	

function ChangeSlide(sens) {
	numero = numero + sens;
	console.log(numero)
	if (numero > 3)
		numero = 0;
	if (numero < 0 )
		numero = 3;
	image.setAttribute("src","./assets/images/slideshow/" + slides[numero].image);
	document.getElementById("textInfo").innerHTML = slides[numero].tagLine;
};


function dotSelected(sens){
if (dots === numero){
	dots.classList.add("dot_selected");
	} else {
	dots.classList.remove("dot_selected");
}} 


