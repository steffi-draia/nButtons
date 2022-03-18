var winnerButtonId = -1;

function chooseRandomButtonId(max) {
  return Math.floor(Math.random() * max);
}

function generateButtons() {
  let div1 = document.getElementById('div1');
  let noOfButtons = document.getElementById('user-input').value;
  for (let i = 0; i < noOfButtons; ++i) {
    let buttonElement = document.createElement('button');
    buttonElement.setAttribute("id", i);
    buttonElement.addEventListener("click", isWinningButton);
    buttonElement.innerHTML = "Click me!";
    div1.appendChild(buttonElement);
  }
  winnerButtonId = chooseRandomButtonId(noOfButtons);
}

function isWinningButton(e) {
  let clickedButtonId = e.target.id;
  let showResult = document.getElementById('showMessage');
  if (clickedButtonId == winnerButtonId) {
    showResult.innerHTML = "Well done! Winning Button chosen!";
  } else {
    showResult.innerHTML = "Maybe you will have better luck next time";
  }
}
