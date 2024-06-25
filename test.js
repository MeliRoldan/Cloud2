const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" || 
    userInput === "paper" || 
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return 'Input is invalid.';
  };
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
      return"scissors";
    break;
  };
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a TIE.';
  }
  
  if (userChoice ==='rock'&& computerChoice === "scissors") {
    return 'You WON!';
  } else {
    return 'Computer WON!';
  }

  if (userChoice ==='paper'&& computerChoice === "rock") {
    return 'You WON!';
  } else {
    return 'Computer WON!';
  }

  if (userChoice ==='scissors'&& computerChoice === "paper") {
    return 'You WON!';
  } else {
    return 'Computer WON!';
  }
};

const game = () => {
  const userChoice = getUserChoice('rock');
  let user = document.getElementById('user');
  user.innerHTML = `${userChoice}`;
 
  const computerChoice = getComputerChoice();
  let computer = document.getElementById('computer');
  computer.innerHTML = `${computerChoice}`;

  return determineWinner(userChoice, computerChoice);
};

game();
let result = document.getElementById('result');
result.innerHTML = `${game()}`;
