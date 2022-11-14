//array of colors RGB 
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
//querySelector(selectors)-> return 1st element within doc that matches
//specified selector or group.
const color = document.querySelector(".color");

//addEventListener()-> is user interaction like click or keypress
//then run some code whenever that action happens  Ex click Events
btn.addEventListener('click', function () {
    // get random number between 0 - 3 array
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// create function that generate random number/color
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}