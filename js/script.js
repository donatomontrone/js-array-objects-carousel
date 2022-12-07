// Consegna:
// Modifichiamo il codice dell'esercizio per renderlo funzionante con
// un array di oggetti, con una regola: non potete modificare l'array di oggetti in nessun caso.
// Dato un array di oggetti letterali con:
//  url dell’immagine
// titolo
// descrizione
// Creare un carosello.
// Milestone 0:
// Popoliamo dinamicamente il contenuto del carosello con i dati forniti dall'array di oggetti,
// dal js (dentro al nostro 'carousel-item', per capirci).
// Milestone 1:
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile.
// Milestone 2:
// Aggiungiamo alla visualizzazione delle immagini anche titolo e testo relative alla singola immagine.
// Bonus 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso l'alto,
// l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso il basso.
// Bonus 2:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// Bonus 3:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva
// dovrà cambiare alla successiva.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Assegno ad una variabile l'elemento parent
const divCarouselImage = document.querySelector('div.carousel-image');
const mainElement = document.querySelector('main');

const divThumbnails = document.querySelector('div.carousel-thumbnails');

// //Assegno ad una variabile il div che conterrà le img //!Potrebbe servirmi all'esterno

//Assegno i due bottoni che mi serviranno per l'eventListener
const buttonPrevious = document.querySelector('div.previous');
const buttonNext = document.querySelector('div.next');



let counter = 0;
let imgPosition = [];
let thumbPosition = [];

//Ciclo per tutta la lunghezza dell'array creando i div che mi servono
for (let index = 0; index < images.length; index++) {
    let divMyCarousel = document.createElement('div');
    divMyCarousel.innerHTML = `<img src="./${images[index].image}" alt="image">
    <h3>${images[index].title}</h3>
    <p>${images[index].text}</p>`
    divMyCarousel.classList.add('my_carousel-item')
    divCarouselImage.appendChild(divMyCarousel);
    imgPosition.push(divMyCarousel);
    //Aggiungo le thumbnails
    let divMyThumbnail = document.createElement('div');
    divMyThumbnail.innerHTML = `<img src="./${images[index].image}" alt="image">`
    divMyThumbnail.classList.add('my_thumbnail-item');
    divThumbnails.appendChild(divMyThumbnail);
    thumbPosition.push(divMyThumbnail);
}
    imgPosition[counter].classList.add('active');
    thumbPosition[counter].classList.add('active');

//Aggiungo un evento click al bottone in alto
buttonPrevious.addEventListener('click', function() {
    imgPosition[counter].classList.remove('active');
    thumbPosition[counter].classList.remove('active');
    counter--;
    if (counter < 0){
        counter = imgPosition.length - 1;
    }
    imgPosition[counter].classList.add('active');
    thumbPosition[counter].classList.add('active');
});

//Aggiungo un evento click al bottone in basso
buttonNext.addEventListener('click', function(){
    imgPosition[counter].classList.remove('active');
    thumbPosition[counter].classList.remove('active');
    counter++;
    if (counter > imgPosition.length - 1){
    counter = 0;
    }
    imgPosition[counter].classList.add('active');
    thumbPosition[counter].classList.add('active');
});

console.log(imgPosition);




// const carouselWrapper = document.querySelector("div.carousel-image");

// let activeIndex = 0;
//     images.forEach((element, index) => {
//         carouselWrapper.innerHTML +=
//         `<div class="my_carousel-item">
//             <img src="./${element.image}" alt="${element.title}">
//         </div`
//     });

// document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');

//const buttonPrevious = document.querySelector('div.previous');

// buttonPrevious.addEventListener(('click'), function(){
//     document.querySelector(div.my_carousel-item.active).classList.remove('active');
//     activeIndex--;
//     document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');
// })

//const buttonNext = document.querySelector('div.next');
//     document.querySelector(div.my_carousel-item.active).classList.remove('active');
//     activeIndex++;
//     document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');