//function that asks if the user would like to play the game.
function answerQuestion(choice){
    if (choice == true) { //if statement to make a decision on what to output
        document.getElementById("answer").textContent = 'Choose your move!' //output for yes answer
    } else { //if its not true
    document.getElementById("game").innerText = "Have a great day!"; //output for no answer
    }
}

//function that plays the game

  function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"]; //the choices a player can make
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; //randomiszd choices for the computer

    let result = ""; //seting result to an empty string
    if (playerChoice === computerChoice) { //if statement to compare the players choice to the computers choice
      result = "It's a tie! 🤝"; //setting result if the choice is the same
    } else if ( //condtions for the player to be the winner with and/or statement
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = `You win!  ${playerChoice} beats ${computerChoice}`;//setting result if player wins
    } else {
      result = `You lose! 😢 ${computerChoice} beats ${playerChoice}`; //if none of the above conditions are met then result displays this statement 
    }

    document.getElementById("player").textContent = `You chose: ${playerChoice}`;//updates player's choice
    document.getElementById("computer").textContent = `Computer chose: ${computerChoice}`; //updates computer's choice
    document.getElementById("outcome").textContent = result; //updates the game result 
  }

  function displayMessage(name) { // Function for the name "
    const message = `${name}! Thank you for playing.`; // Message that include user input
    document.getElementById("userMessage").innerText = message; // Output 
}

