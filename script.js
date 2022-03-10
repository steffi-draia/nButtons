var isWinner = -1;

function generateNButtons() {
  var div1 = document.getElementById('div1');
	var nButtons = document.getElementById('user-input').value;
  console.log(nButtons.value);
  for (var i = 0; i < nButtons; ++i) {
  	var createButton = document.createElement('button');
    createButton.setAttribute("id", i);
    createButton.addEventListener("click", isWinningButton);
    createButton.innerHTML = "Click me!";
    div1.appendChild(createButton);
  }
  isWinner = chooseRandomButtonId(nButtons);
}

function chooseRandomButtonId(max) {
  return Math.floor(Math.random() * max);
}

function isWinningButton(e) {
	var buttonId = e.target.id;
  var clickedButton = document.getElementById('showMessage');
  if (buttonId == isWinner) {
    clickedButton.innerHTML = "Well done! Winning Button chosen!";
  } else {
    clickedButton.innerHTML = "Maybe you will have better luck next time";
  }
}
