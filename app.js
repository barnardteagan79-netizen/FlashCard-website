const card = document.querySelector('.card-inner');
const SunandMoon = document.querySelector('.insight_box');
const front = document.querySelector('.front');
const body = document.getElementById('FlashCardWeb');
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

let cards = document.querySelectorAll(".card-inner");
let index = 0;

DisplayCard();

//FLIPS THE FLASH OVER
cards[index].onclick = function()
{
    cards[index].classList.toggle("flipped");
    console.log(index);
}

//FLIPS THE SUN AND MOON ICONS OVER
SunandMoon.addEventListener('click', () => {
    SunandMoon.classList.toggle('flipped');
    body.classList.toggle('dark');
});


nextBtn.onclick = function()
{
    index++;
    DisplayCard();
}

previousBtn.onclick = function()
{
    index--;
    DisplayCard();
}

//FLIPS THE SUN AND MOON ICONS OVER

function DisplayCard()
{
    for(let c = 0; c < cards.length; c++)
    {
        cards[c].classList.remove("Show");
    }

    // if(i > cards.length)
    // {
    //     i = 0;
    // }
    index = Math.abs(index);
    cards[index % cards.length].classList.add("Show");
}