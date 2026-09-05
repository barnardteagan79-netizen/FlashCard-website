const card = document.querySelector('.card-inner');
const SunandMoon = document.querySelector('.insight_box');
const front = document.querySelector('.front');
const body = document.getElementById('FlashCardWeb');
const nextBtn = document.getElementById("next");

let questions = ["WHAT'S 9+10?", "why am I so sexy?", "WHY IS THIS WEBSITE SO PRETTY"];
let index = 0;

LoadQuestion(index);

card.addEventListener('click', () =>{
    card.classList.toggle("flipped");
    console.log("it's working");
});


SunandMoon.addEventListener('click', () => {
    SunandMoon.classList.toggle('flipped');
    body.classList.toggle('dark');
});


nextBtn.addEventListener('click', () => {
    LoadQuestion(index);
    index++;
});

//LOAD FUNCTION
function LoadQuestion(i)
{
    front.textContent = questions[i % questions.length];
}