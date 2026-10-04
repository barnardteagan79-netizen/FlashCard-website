let card = document.querySelector('.card-inner');
const SunandMoon = document.querySelector('.insight_box');
const front = document.querySelectorAll('.front');
const back = document.querySelectorAll('.back');
const body = document.getElementById('FlashCardWeb');
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

let cards = document.querySelectorAll(".card-inner");
let index = 0;

let coloursFront = ["rgb(77, 140, 165)", "rgb(66, 219, 117)", "rgb(199, 24, 68)", "rgb(25, 75, 24)"];
let coloursBack = ["rgb(219, 150, 60)", "rgba(187, 113, 236, 0.95)", "pink", "rgb(85, 87, 117)"]

DisplayCard();
LoadCards();

//FLIPS THE FLASH OVER

//FLIPS THE SUN AND MOON ICONS OVER
SunandMoon.addEventListener('click', () => {
    SunandMoon.classList.toggle('flipped');
    body.classList.toggle('dark');
});

function LoadCards()
{
    for(let  i  = 0; i < cards.length; i++)
    {
        let n = Math.floor(Math.random()*coloursFront.length);
        front[i].style.backgroundColor = coloursFront[n];
        back[i].style.backgroundColor = coloursBack[n];

        console.log(i);
    }
}

nextBtn.onclick = function()
{
    index++;
    DisplayCard();
}

previousBtn.onclick = function()
{
    index--;
    card.classList.remove("flipped");
    DisplayCard();
}

//FLIPS THE SUN AND MOON ICONS OVER

function DisplayCard()
{
    for(let c = 0; c < cards.length; c++)
    {
        cards[c].classList.remove("Show");
    }
    
   if(index > cards.length-1)
   {
        index = 0;
   }

    index = Math.abs(index);
    cards[index % cards.length].classList.add("Show");

    FlipFlashCard();
    
    
    card = document.querySelector('.card-inner');
}

function FlipFlashCard()
{
    cards[index].onclick = function () {
        cards[index].classList.toggle("flipped");
    }
}