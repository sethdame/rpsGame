$(document).ready(function() {
    $("button#show").hide("fast");
    $("#start").click(function() {
        $("button#show").show("slow");
        $("button#start").hide("slow");
    });
});

var wins = 0;
var losses = 0;
var ties = 0;

var modify_qty = function(val, result) {
    var qty = document.getElementById(result).value;
    var new_qty = parseInt(qty,10) + val;
    document.getElementById(result).value = new_qty;
    return new_qty;
}
var display_result = function(response) {
    document.getElementById("play").innerHTML = response;
}
function tie() {
    modify_qty(1, "tie");
    display_result("Tie! Play again!");
}
function win() {
    modify_qty(1, "win");
    display_result("You Win!");
}
function lose() {
    modify_qty(1, "loss")
    display_result("I beat you!");
}
function start() {
    display_result("Do you choose Rock, Paper or Scissors?"); 
} 

var jsmChoice = function(tool) {
    document.getElementById("play").innerHTML = "jsMachine chooses:" + " " + tool;
}
function jsMachineStrategy() {
    var i = Math.random();
    if (i < 0.34) {
        i = "Rock";
    } else if (i <= 0.67) {
        i = "Paper";
    } else {
        i = "Scissors";
    }
    return i;
}
var returnTimeout = function(fnc) {
    setTimeout(fnc, 1000);
}
var play = function(choice1, choice2) {
    if (choice1 === choice2) {
        return tie();
    } else if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            jsmChoice("Scissors");
            return returnTimeout(win);
        } else {
            jsmChoice("Paper");
            return returnTimeout(lose);
        }
    } else if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            jsmChoice("Rock");
            return returnTimeout(win);
        } else {
            jsmChoice("Scissors");
            return returnTimeout(lose);
        }
    } else if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            jsmChoice("Rock");
            return returnTimeout(lose);
        } else {
            jsmChoice("Paper");
            return returnTimeout(win);
        }
    }
}