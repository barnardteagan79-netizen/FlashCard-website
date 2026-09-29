const card = document.querySelector('.card-inner');
const SunandMoon = document.querySelector('.insight_box');
const front = document.querySelector('.front');
const body = document.getElementById('FlashCardWeb');
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

let cards = document.querySelectorAll(".card-inner");
let index = 0;

//FLIPS THE FLASH OVER
card.addEventListener('click', () =>{
    card.classList.toggle("flipped");
    console.log(cards.length);
});

//FLIPS THE SUN AND MOON ICONS OVER
SunandMoon.addEventListener('click', () => {
    SunandMoon.classList.toggle('flipped');
    body.classList.toggle('dark');
});


nextBtn.onclick = function()
{
    DisplayCard(index);
    index++;
}

previousBtn.onclick = function()
{
    DisplayCard(index);
    index--;
}

//FLIPS THE SUN AND MOON ICONS OVER

function DisplayCard(i)
{
    for(let c = 0; c < cards.length; c++)
    {
        cards[c].classList.remove("Show");
    }

    if(i > cards.length)
    {
        i = 0;
    }
    i = Math.abs(i);
    cards[i % cards.length].classList.add("Show");
}