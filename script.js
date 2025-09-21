// Don't redefine Module - it's already created by rps.js
// The Module object is configured in index.html before rps.js loads

function playGame(playerChoice) {
  // Check if WASM is loaded and the function is available
  if (!Module._play) {
    document.getElementById("result").innerText = "WASM not loaded yet!";
    return;
  }
  
  let computerChoice = Math.floor(Math.random() * 3);
  
  // Since your WASM doesn't export string conversion functions,
  // let's implement the game logic in JavaScript instead
  let result;
  if (playerChoice == computerChoice) {
    result = "It's a tie!";
  } else if ((playerChoice == 0 && computerChoice == 2) ||
             (playerChoice == 1 && computerChoice == 0) ||
             (playerChoice == 2 && computerChoice == 1)) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }
  
  document.getElementById("result").innerText =
    "You: " + ["Rock", "Paper", "Scissors"][playerChoice] +
    " | Computer: " + ["Rock", "Paper", "Scissors"][computerChoice] +
    " → " + result;
}