const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Input is not valid.");
    }
  };
  
  const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
      return "WOW! IT IS A WIN!";
    }
    
    if (userChoice === computerChoice) {
      return "It is a TIE!";
    }
  
    if (userChoice === "rock" && computerChoice === "paper") {
      return "Computer WON!";
    } else {
      return "User WON!";
    }
  
    if (userChoice === "paper" && computerChoice === "scissors") {
      return "Computer WON!";
    } else {
      return "User WON!";
    }
  
    if (userChoice === "scissors" && computerChoice === "rock") {
      return "Computer WON!";
    } else {
      return "User WON!";
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("bomb");
    console.log("Your threw: " + userChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  