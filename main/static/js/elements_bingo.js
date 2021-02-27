// Array of elements from which to build the game------------------------------------------------------------------------------------------------------------------

var elementsArray = [{
  name: 'hydrogen',
  square: 'http://periodictable.com/Samples/001.x3/s9s.JPG',
  clues: 'hydrogen clue',
  correct: 'false'
}, {
  name: 'lithium',
  square: 'http://periodictable.com/Samples/003.3/s9s.JPG',
  clues: 'lithium clue',
  correct: 'false'
}, {
  name: 'sodium',
  square: 'http://periodictable.com/Samples/011.9/s9s.JPG',
  clues: 'sodium clue',
  correct: 'false'
}, {
  name: 'potassium',
  square:'http://periodictable.com/Samples/019.6/s9s.JPG',
  clues: 'potassium clue',
  correct: 'false'
}, {
  name: 'helium',
  square: 'http://www.periodictable.com/Samples/002.6/s13.JPG',
  clues: 'helium clue',
  correct: 'false'
}, {
  name: 'neon',
  square: 'http://periodictable.com/Samples/010.8/s9s.JPG',
  clues: 'neon clue',
  correct: 'false'
}, {
  name: 'argon',
  square: 'http://periodictable.com/Samples/018.7/s9s.JPG',
  clues: 'argon clue',
  correct: 'false'
}, {
  name: 'krypton',
  square: 'http://periodictable.com/Samples/036.6/s9s.JPG',
  clues: 'krypton clue',
  correct: 'false'
}, {
  name: 'xenon',
  square: 'http://www.periodictable.com/Samples/054.6/s13.JPG',
  clues: 'xenon clue',
  correct: 'false'
}, {
  name: 'radon',
  square: 'http://periodictable.com/Samples/086.4/s9s.JPG',
  clues: 'radon clue',
  correct: 'false'
}, {
  name: 'fluorine',
  square: 'http://periodictable.com/Samples/009.6/s9s.JPG',
  clues: 'fluorine clue',
  correct: 'false'
}, {
  name: 'chlorine',
  square: 'http://periodictable.com/Samples/017.3/s9s.JPG',
  clues: 'chlorine clue',
  correct: 'false'
}, {
  name: 'bromine',
  square: 'http://periodictable.com/Samples/035.2/s9s.JPG',
  clues: 'bromine clue',
  correct: 'false'
}, {
  name: 'iodine',
  square: 'http://periodictable.com/Samples/053.8/s9s.JPG',
  clues: 'iodine clue',
  correct: 'false'
}, {
  name: 'oxygen',
  square: 'http://periodictable.com/Samples/008.10/s9s.JPG',
  clues: 'oxygen clue',
  correct: 'false'
}, {
  name: 'sulfur',
  square: 'http://periodictable.com/Samples/NativeSulfur/s9s.JPG',
  clues: 'sulfur clue',
  correct: 'false'
}, {
  name: 'selenium',
  square: 'http://periodictable.com/Samples/034.12/s9s.JPG',
  clues: 'selenium clue',
  correct: 'false'
}, {
  name: 'phosphorous',
  square: 'http://periodictable.com/Samples/015.6/s9s.JPG',
  clues: 'phosphorous clue',
  correct: 'false'
}, {
  name: 'nitrogen',
  square: 'http://periodictable.com/Samples/007.8/s9s.JPG',
  clues: 'nitrogen clue',
  correct: 'false'
}, {
  name: 'carbon',
  square: 'http://periodictable.com/Samples/006.x4/s9s.JPG',
  clues: 'carbon clue',
  correct: 'false'
}, {
  name: 'boron',
  square: 'http://periodictable.com/Samples/005.6/s9s.JPG',
  clues: 'boron clue',
  correct: 'false'
}, {
  name: 'magnesium',
  square: 'http://periodictable.com/Samples/012.15/s9s.JPG',
  clues: 'magnesium clue',
  correct: 'false'
}, {
  name: 'calcium',
  square: 'http://periodictable.com/Samples/020.6/s9s.JPG',
  clues: 'calcium clue',
  correct: 'false'
}, {
  name: 'nickel',
  square: 'http://periodictable.com/Samples/028.9/s9s.JPG',
  clues: 'nickel clue',
  correct: 'false'
}, {
  name: 'copper',
  square: 'http://periodictable.com/Samples/029.24/s9s.JPG',
  clues: 'copper clue',
  correct: 'false'
}, {
  name: 'gold',
  square: 'http://periodictable.com/Samples/079.2/s9s.JPG',
  clues: 'gold clue',
  correct: 'false'
}]

//-------------------------------------------------------------------------------------------------------------------------------------------------------

var clueArr;
var bingoArr = [];
var boardSize = 5;
var playButton = document.getElementById('play');
var questionBox = document.getElementById('questions');
var dispMessage = document.getElementById('message');
var resetButton = document.getElementById('reset');
var bingoBoard = document.getElementById('bingoboard');
var numTries = document.getElementById('noOfTries');
var tries = 3;
var bingo;

numTries.innerHTML = 'You have ' + tries + ' tries before your next clue.';

// This function 1) creates a 5x5 array where each index holds a random object from elementsArray and splices it from the array so no 
// element appears twice on the board 2) refills elementsArray for later use

function generateBoard() {
  var eleArrCopy = elementsArray.slice();
  for(var i = 0; i < boardSize; i++) {
    bingoArr[i] = [];
    for(var j = 0; j < boardSize; j++) {
      var randomIndex = Math.floor(Math.random()*eleArrCopy.length);
      var randomElement = eleArrCopy[randomIndex];
      bingoArr[i].push(randomElement);
      eleArrCopy.splice(randomIndex, 1);
    }
  }
}

// This function fills the table element with the 5x5 array, creates a new image with the square property of the element object at each index
// set as the src; then appends it to the cell
// Each square is given an id attribute of the elements name to allow it to be matched to the clue provided
// EXPLAIN CLUEARR!!

function displayBoard() {
	var table = document.getElementById('bingoboard');
	clueArr = [];
	var square;
	for(var i = 0; i < boardSize; i++) {
		var row = table.insertRow(i);
		for(var j = 0; j < boardSize; j++) {
			square = new Image(100, 100);
			square.src = bingoArr[i][j].square;
			square.setAttribute('class','square');
			square.setAttribute('id', bingoArr[i][j].name);
			var cell = row.insertCell(j);
			cell.appendChild(square);
			clueArr.push(bingoArr[i][j]);
		}
	}
}

// This function generates a random clue. If the player has gotten Bingo it forces them to press the restart button to play another game; otherwise it finds a random
// index in clueArr and displays the clue
// The clue is displayed within a paragraph element which is given an id of the elements name to allow it to be matched to bingo board pieces

function makeClue() {
	if(bingo) {
		dispMessage.innerHTML = '<p>Press the reset button to start.</p>';
	}
	else {
		tries = 3;
		var randomIndex = Math.floor(Math.random()*clueArr.length);
		var randomClue = clueArr[randomIndex].clues;
		var questDisp = document.createElement('p');
		questDisp.setAttribute('class','questionText');
		questDisp.setAttribute('id', clueArr[randomIndex].name);
		questDisp.innerHTML = randomClue;
		if(questionBox.innerHTML !== '') {
			questionBox.removeChild(questionBox.childNodes[0]);
		}
		if(dispMessage.innerHTML !== '') {
			dispMessage.removeChild(dispMessage.childNodes[0]);
		}
		questionBox.appendChild(questDisp);
	}
}
// ----------------------------------IF GAME PIECE SELECTION DOES NOT MATCH PROVIDED CLUE--------------------------------------
generateBoard();
displayBoard(); 
playButton.addEventListener('click', makeClue); 

// Reset function resets the entire game, rebuilds and reloads the board

function reset() {
	bingo = false;
	tries = 3;
	numTries.innerHTML = 'You have ' + tries + ' try before your next clue.';
	for(var r = 0; r < bingoArr.length; r++) {
		for(var c = 0; c < bingoArr[r].length; c++) {
			bingoArr[r][c].correct = 'false';
		}
	}
	if(dispMessage.innerHTML !== '') {
		dispMessage.removeChild(dispMessage.childNodes[0]);
	}
	if(questionBox.innerHTML !== '') {
		questionBox.removeChild(questionBox.childNodes[0]);
	}
	bingoBoard.removeChild(bingoBoard.childNodes[0]);
	generateBoard();
	displayBoard();
	playButton.addEventListener('click', makeClue); 
	activateGame();
}

// This function detects whether or not a player has won by a row Bingo ----------------------------------------------------------------------------------------------


function rowWins(arr) {
	outerloop:
		for(var r = 0; r < arr.length; r++) {
			for(var c = 0;  c < arr[r].length; c++) {
				if(arr[r][c].correct === 'false') {
					continue outerloop;
				}
			}
			return true;
		}
}

// This function detects whether or now the player has won by a column Bingo ----------------------------------------------------------------------------------------------

function colWins(arr) {
	var r = 0;
	outerloop: 
		for(var c = 0; c < arr[r].length; c++) {
			for(r = 0; r < arr.length; r++) {
				if(arr[r][c].correct === 'false') {
					continue outerloop;
				}
			}
			return true;
		}
}

// Detects a diagonal win from left to right ----------------------------------------------------------------------------------------------

function diagonalsLtrWin(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i][i].correct === 'false') {
			return;
		}
	}
	return true;
}
// Detects a diagonal win from right to left ----------------------------------------------------------------------------------------------

function diagonalsRtlWin(arr) {
	var c = arr.length-1;
	for(var r = 0; r < arr.length; r++) {
		if(arr[r][c].correct === 'false') {
			return;
		}
		c--;
	}
	return true;
}

function isThereWin() {
  if(rowWins(bingoArr) || colWins(bingoArr) || diagonalsLtrWin(bingoArr) || diagonalsRtlWin(bingoArr)) {
    bingo = true;
    numTries.innerHTML = '<p> BINGO! </p>';
    return;
  }
}
//----------------------------------ACTUAL GAME-----------------------------------------------------
var gamePiece = document.getElementsByClassName('square');
var gameDisplay = document.getElementsByClassName('questionText');

function activateGame() {
	for(var i = 0; i < gamePiece.length; i++) {
		gamePiece[i].addEventListener('click', function(event) {

// This function uses the elements ID property to match it with it's corresponding index in clueArr ------------------------
			
			function findEleRow(ele) {
				return ele.name === this.id;
			}

			var findEle = findEleRow.bind(this)

			function findEleBoard() {
				var query = clueArr.find(findEle);
				if(query !== undefined) {
					return query;
				}
			}
// ------------------------FORCES PLAEYER TO PRESS PLAY BUTTON TO BEGIN GAME----------------------
			if(questionBox.innerHTML === '') {
				dispMessage.innerHTML = '<p>Press the button to start</p>';
			} 
// This uses the ID attribute of the clue displayed to make a comparison to the ID attribute of the piece selected
// if they don't match tries is decreased by one, if the player has run out of tries then tries is reset to three, and
// another random clue is generated 
			var clueName = gameDisplay[0].id;
			var pieceName = this.id;
			if(clueName !== pieceName) {
				tries -= 1;
				if(tries === 0) {
					tries = 3;
					makeClue();
				}
				if(tries === 1) {
					numTries.innerHTML = 'You have ' + tries + ' try before your next clue.'
				}
				else {
					numTries.innerHTML = 'You have ' + tries + ' tries before your next clue.'
				}

			}

// If the clue and the piece selected have matching ID attributes then, a random clue is generated, tries is reset to zero,
// and that piece is marked as correct with a layer of opacity, the correct property of each element is changed from 'false' to 'true'
// and that clue is removed from clueArr so that it's no longer called
			
			if(clueName === pieceName) {
				makeClue();
				tries = 3;
				numTries.innerHTML = 'You have ' + tries + ' tries before your next clue.'
				this.style.opacity = '0.5';
				findEleBoard().correct = 'true';
				var clueInd = clueArr.indexOf(findEleBoard());
				console.log(clueArr[clueInd].name);
				clueArr.splice(clueInd, 1);
				console.log(clueArr[clueInd].name);
				console.log('Clue Array length: ', clueArr.length);
			}

// Each time a player selects a correct piece the game runs each of these functions to search for a possible wim
      isThereWin();
		})
	}
}

activateGame();
resetButton.addEventListener('click', reset);

