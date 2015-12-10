$(document).ready(function() {
  var shoot = 0;
  var yourScore = 0;
  var compScore = 0;
  var round = 0;
  var roundWon = 0;
  var roundLost = 0;
  var tiedRounds = 0;

  $("#toggleGame").on("click", function() {
    if ($(this).attr("data-status") === "on") {
      $(this)
        .addClass("btn-success")
        .removeClass("btn-danger")
        .attr("data-status", "off")
        .html("Reset Game");
      bindControls();
      enableAnimation();
    } else {
      $(this)
        .addClass("btn-danger")
        .removeClass("btn-success")
        .attr("data-status", "on")
        .html("Start Game");
      $(".shoot").unbind();
      $("h2").empty();
      $(".clear").empty();
      $(".allClear").empty();
      shoot = yourScore = compScore = round = roundWon = roundLost = tiedRounds = 0;
    }
  })

  function bindControls() {
    $(".shoot").on("click", function() {
      var choiceRPS = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
      var ranNum = Math.floor(Math.random() * choiceRPS.length);
      var compChoice = choiceRPS[ranNum];
      var userChoice = this.id;
      shoot++;
      $("#shoot").html(shoot);
      var compChoice = choiceRPS[ranNum];
      $("#computerChoice").html(compChoice);
      $("#yourChoice").html(userChoice);
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
        round++;
        $("#round").html(round);
        $("h2").empty();
        $(".clear").empty();
        if (yourScore > compScore) {
          roundWon++;
          $("#roundWon").html(roundWon);
          $(".modal-title").html("YOU WIN!");
          $(".modal-text").html("You win that round.");
          $("#win").modal({
            keyboard: false
          });
        } else if (yourScore < compScore) {
          roundLost++;
          $("#roundLost").html(roundLost);
          $(".modal-title").html("YOU LOSE!!!");
          $(".modal-text").html("You have disgraced your family.");
          $("#win").modal({
            keyboard: false
          });
        } else if (yourScore == compScore) {
          tiedRounds++;
          $("#tiedRounds").html(tiedRounds);
          $(".modal-title").html("PFFFTTT!!!!");
          $(".modal-text").html("I guess that round is a tie.");
          $("#win").modal({
            keyboard: false
          });
        };
        shoot = yourScore = compScore = 0;
      };
    });
  };

    function enableAnimation() {
    $(".change").on("mouseenter", function() {
      $(this).toggleClass("pulse");
    }).on("mouseleave", function() {
      $(this).toggleClass("pulse");
    });
  };
});