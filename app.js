const card = document.querySelector('.card-inner');
const SunandMoon = document.querySelector('.insight_box');
const front = document.querySelector('.front');
const body = document.getElementById('FlashCardWeb');
const nextBtn = document.getElementById("next");

//FLIPS THE FLASH OVER
card.addEventListener('click', () =>{
    card.classList.toggle("flipped");
});

//FLIPS THE SUN AND MOON ICONS OVER
SunandMoon.addEventListener('click', () => {
    SunandMoon.classList.toggle('flipped');
    body.classList.toggle('dark');
});


nextBtn.addEventListener('click', () => {
    LoadQuestion(index);
    index++;
});
//FLIPS THE SUN AND MOON ICONS OVER

