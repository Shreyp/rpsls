$(document).ready(function() {
    var shoot = 0;
    var yourScore = 0;
    var compScore = 0;
    var round = 0;
    var roundWon = 0;
    var roundLost = 0;
    var tiedRounds = 0;

    $(".shoot").on("click", function() {
        var choiceRPS = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
        var ranNum = Math.floor(Math.random() * choiceRPS.length);
        var compChoice = choiceRPS[ranNum];
        var userChoice = this.id;
        shoot++;
        $("#shoot").html(shoot);
        var compChoice = choiceRPS[ranNum];
        console.log(userChoice);
        console.log(compChoice);

        if (compChoice == userChoice) {};

        if (userChoice === "rock") {
            if (compChoice === "lizard" || compChoice === "scissor") {
                yourScore++;
            } else {
                if (compChoice === "paper" || compChoice === "spock") {
                    compScore++;
                }
            }
        };
        if (userChoice === "paper") {
            if (compChoice === "rock" || compChoice === "spock") {
                yourScore++;
            } else {
                if (compChoice === "scissor" || compChoice === "lizard") {
                    compScore++;
                }
            }
        };
        if (userChoice === "scissor") {
            if (compChoice === "paper" || compChoice === "lizard") {
                yourScore++;
            } else {
                if (compChoice === "rock" || compChoice === "spock") {
                    compScore++;
                }
            }
        };
        if (userChoice === "lizard") {
            if (compChoice === "spock" || compChoice === "paper") {
                yourScore++;
            } else {
                if (compChoice === "rock" || compChoice === "scissor") {
                    compScore++;
                }
            }
        };
        if (userChoice === "spock") {
            if (compChoice === "rock" || compChoice === "scissor") {
                yourScore++;
            } else {
                if (compChoice === "lizard" || compChoice === "paper") {
                    compScore++;
                }
            }
        };
        $("#yourScore").html(yourScore);
        $("#computerScore").html(compScore);
        if (shoot === 5) {
            round ++;
            $("#round").html(round);
            if (yourScore > compScore) {
                roundWon ++;
                $("#roundWon").html(roundWon);
                $("#win").modal({
                    keyboard:false
                });
            } else if (yourScore < compScore) {
                roundLost ++;
                $("#roundLost").html(roundLost);
                $("#lose").modal({
                    keyboard:false
                });
            } else if (yourScore == compScore) {
                tiedRounds ++;
                $("#tiedRounds").html(tiedRounds);
                $("#tie").modal({
                    keyboard:false
                });
            };
            shoot = yourScore = compScore = 0;
        };
    });
});