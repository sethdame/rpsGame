$(document).ready(function() {
    $("button#show").hide();
    $("#play").click(function() {
        $("button#show").show("slow");
    })
})

var wins = 0;
var losses = 0;
var ties = 0;

// var again = function() {
//     var playAgain = window.confirm("Do you want to play again?");
//     if (playAgain == true) {
//         rpsGame();
//     } else {
//         alert("Thanks for playing!");
//     }
// }
// var tie = function() {
//     ties += 1;
//     document.getElementById("tie").innerHTML = ties;
//     confirm("Tie! Play again!");
//     rpsGame(); 
// }
// var wrongChoice = function() {
//     confirm("Choose again!");
//     rpsGame();
// }
// var win = function() {
//     wins += 1;
//     document.getElementById("win").innerHTML = wins;
//     confirm("You Win!");
//     again();
// }
// var lose = function() {
//     losses += 1;
//     document.getElementById("loss").innerHTML = losses;
//     confirm("I beat you!");
//     again();
// }

// var compare = function(choice1, choice2) {
//     if (choice1 === choice2) {
//         return tie();
//     } else if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             return win();
//         } else {
//             return lose();
//         }
//     } else if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             return win();
//         } else {
//             return lose();
//         }
//     } else if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             return lose();
//         } else {
//             return win();
//         }
//     } else if (choice1 != "scissors", "rock", "paper") {
//         return wrongChoice();
//     }
// }

// var rpsGame = function() {
//     var userChoice = prompt("Do you choose rock, paper or scissors?");
//     var choice2 = Math.random();
//     if (choice2 < 0.34) {
//         choice2 = "rock";
//     } else if(choice2 <= 0.67) {
//         choice2 = "paper";
//     } else {
//         choice2 = "scissors";
//     } console.log("Computer: " + choice2);

//     compare(userChoice, choice2);
// }
// rpsGame();

////////PLAY AGAIN FROM BUTTON/////////////

var tieAgain = function() {
    ties += 1;
    document.getElementById("tie").innerHTML = ties;
    document.getElementById("playAgain").innerHTML = "Tie! Play again!";
}
var winAgain = function() {
    wins += 1;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("playAgain").innerHTML = "You Win!";
}
var loseAgain = function() {
    losses += 1;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("playAgain").innerHTML = "I beat you!";
}
var playAgain = function() {
    document.getElementById("playAgain").innerHTML = 
    "Do you choose rock, paper or scissors?";
} 

var jsmChoice = function(tool) {
    document.getElementById("playAgain").innerHTML = "jsMachine chooses" + " " + tool;
}
// var jsmChoice2 = function() {
//     document.getElementById("playAgain").innerHTML = "jsMachine chooses paper";
// }
// var jsmChoice3 = function() {
//     document.getElementById("playAgain").innerHTML = "jsMachine chooses scissors";
// }
var computerChoice = function() {
    var i = Math.random();
    if (i < 0.34) {
        i = "rock";
    } else if (i <= 0.67) {
        i = "paper";
    } else {
        i = "scissors";
    }
    return i;
}
var returnTimeout = function(fnc) {
    setTimeout(fnc, 1000);
    fnc();
}
var compareAgain = function(choice1, choice2) {
    if (choice1 === choice2) {
        return tieAgain();
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            jsmChoice3();
            return returnTimeout(winAgain);
        } else {
            jsmChoice2();
            return returnTimeout(loseAgain);
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            jsmChoice1();
            return returnTimeout(winAgain);
        } else {
            jsmChoice3();
            return returnTimeout(loseAgain);
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            jsmChoice1();
            return returnTimeout(loseAgain);
        } else {
            jsmChoice2();
            return returnTimeout(winAgain);
        }
    }
}





