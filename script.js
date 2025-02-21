let player_emoji = document.getElementById("player-choice");
let player_score = document.getElementById("player-score");
let computer_emoji = document.getElementById("computer-choice");
let computer_score = document.getElementById("computer-score");
let message = document.querySelector(".state-text");

const emojis = ["✊🏼", "✋🏼", "✌🏼"];

let player = 0;
let computer = 0;

function calculate(index) {
    let random = Math.floor(Math.random() * 3 + 1);
    
    player_emoji.innerText = "🤛🏼";
    computer_emoji.innerText = "🤜🏼";
    player_emoji.classList.add("shake");
    computer_emoji.classList.add("shake");

    setTimeout(() => {
        player_emoji.classList.remove("shake");
        computer_emoji.classList.remove("shake");
        player_emoji.innerText = emojis[index - 1];
        computer_emoji.innerText = emojis[random - 1];

        
        if (index === random) {
            message.innerText = "Match Draw...😟";
        } 
        else if (
            (index === 1 && random === 3) ||  
            (index === 2 && random === 1) ||  
            (index === 3 && random === 2)     
        ) {
            player++;
            player_score.innerText = player;
            message.innerText = "You Win! 🎉";
        } 
        else {
            computer++;
            computer_score.innerText = computer;
            message.innerText = "Computer Wins! 🎉";
        }
    }, 1000);
}