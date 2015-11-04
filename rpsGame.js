$(document).ready(function() {
    $("button#show").hide();
    $("#play").click(function() {
        $("button#show").show("slow");
    })
})

var wins = 0;
var losses = 0;
var ties = 0;

var again = function() {
    var playAgain = window.confirm("Do you want to play again?");
    if (playAgain == true) {
        rpsGame();
    } else {
        alert("Thanks for playing!");
    }
}
var tie = function() {
    ties += 1;
    document.getElementById("tie").innerHTML = ties;
    confirm("Tie! Play again!");
    rpsGame(); 
}
var wrongChoice = function() {
    confirm("Choose again!");
    rpsGame();
}
var win = function() {
    wins += 1;
    document.getElementById("win").innerHTML = wins;
    confirm("You Win!");
    again();
}
var lose = function() {
    losses += 1;
    document.getElementById("loss").innerHTML = losses;
    confirm("I beat you!");
    again();
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return tie();
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return win();
        } else {
            return lose();
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return win();
        } else {
            return lose();
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return lose();
        } else {
            return win();
        }
    } else if (choice1 != "scissors", "rock", "paper") {
        return wrongChoice();
    }
}

var rpsGame = function() {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);

    compare(userChoice, computerChoice);
}
rpsGame();

////////PLAY AGAIN FROM BUTTON/////////////


var againAgain = function() {
    var playAgain = window.confirm("Do you want to play again?");
    if (playAgain == true) {
        playAgain();
    } else {
        alert("Thanks for playing AGAIN!");
    }
}
var tieAgain = function() {
    ties += 1;
    document.getElementById("tie").innerHTML = ties;
    document.getElementById("playAgain").innerHTML = "Tie! Play again!";
    playAgain(); 
}
var wrongChoiceAgain = function() {
    document.getElementById("playAgain").innerHTML = "Choose again :/";
    playAgain();
}
var winAgain = function() {
    wins += 1;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("playAgain").innerHTML = "You Win!";
    againAgain();
}
var loseAgain = function() {
    losses += 1;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("playAgain").innerHTML = "I beat you!";
    againAgain();
}
var playAgain = function() {
    document.getElementById("playAgain").innerHTML = 
    "Do you choose rock, paper or scissors?";
}
var compareAgain = function(choice1, choice2) {
    var rock = "rock";
    var paper = "paper";
    var scissors = "scissors";

    var choice2 = Math.random();
    if (choice2 < 0.34) {
        choice2 = "rock";
    } else if(choice2 <= 0.67) {
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    }

    if (choice1 === choice2) {
        return tie();
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return win();
        } else {
            return lose();
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return win();
        } else {
            return lose();
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return lose();
        } else {
            return win();
        }
    } else if (choice1 != "scissors", "rock", "paper") {
        return wrongChoice();
    }
}




