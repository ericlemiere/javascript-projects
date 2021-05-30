// variable to keep track of whose turn it is
let activePlayer = "X";
// array stores an array of moves and is used to determine win conditions
let selectedSquares = [];

//Function for placing an x or o in a square
function placeXorO(squareNumber) {
    //this condition ensures a square hasn't been selected already

    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        // select variable gets html element id that was clicked
        let select = document.getElementById(squareNumber);

        if (activePlayer === "X") {
            select.style.backgroundImage = 'url("images/neonx.png")';
            //active player can only be X or O, so if not X it must be O
            //placement sound
            audio('./media/kick.wav');
        }
        else {
            select.style.backgroundImage = 'url("images/neono.png")';
            //placement sound
            audio('./media/snare.wav');
        }
        //square number and active player are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        
        checkWinConditions();
        console.log(checkWinConditions());

        if (activePlayer === "X") {
            activePlayer = "O";
            if(checkWinConditions() == false) {
                document.getElementById("gameDisplay").innerHTML = "O's turn!";
            }
        }
        else {
            activePlayer = "X";
            if(checkWinConditions() == false) {
                document.getElementById("gameDisplay").innerHTML = "X's turn!";
            }
            
        }

        

        //condition checks to see if it is computer's turn
        if(activePlayer === "O") {
            disableClick();
            setTimeout(function (){ computersTurn(); }, 2000);
        }
        return true; //true is needed for computersTurn() to work
    }

    /* This function makes the computer take turns.
    Comment the function out in order to play 2 players 
    (where each player alternates)*/
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success && checkWinConditions() == false) {
            //assigns random number between 0-8
            pickASquare = String(Math.floor(Math.random()*9));
            //if random number evaluated returns true, the square is empty
            if(placeXorO(pickASquare)) {
                placeXorO(pickASquare);
                success = true;
            };
        }
    }
}


// Function parses array to search for win conditions
//drawWinLine function is called if conditions are met
function checkWinConditions() {
    if (arrayIncludes("0X", "1X", "2X")) {
        drawWinLine(50, 100, 558, 100);
        return true;
    }
    else if (arrayIncludes("3X", "4X", "5X")) {
        drawWinLine(50, 304, 558, 304);
        return true;
    }
    else if (arrayIncludes("6X", "7X", "8X")) {
        drawWinLine(50, 508, 558, 508);
        return true;
    }
    else if (arrayIncludes("0X", "3X", "6X")) {
        drawWinLine(100, 50, 100, 558);
        return true;
    }
    else if (arrayIncludes("1X", "4X", "7X")) {
        drawWinLine(304, 100, 304, 558);
        return true;
    }
    else if (arrayIncludes("2X", "5X", "8X")) {
        drawWinLine(508, 50, 508, 558);
        return true;
    }
    else if (arrayIncludes("6X", "4X", "2X")) {
        drawWinLine(100, 508, 510, 90);
        return true;
    }
    else if (arrayIncludes("0X", "4X", "8X")) {
        drawWinLine(100, 100, 520, 520);
        return true;
    }
    else if (arrayIncludes("0O", "1O", "2O")) {
        drawWinLine(50, 100, 558, 100);
        return true;
    }
    else if (arrayIncludes("3O", "4O", "5O")) {
        drawWinLine(50, 304, 558, 304);
        return true;
    }
    else if (arrayIncludes("6O", "7O", "8O")) {
        drawWinLine(50, 508, 558, 508);
        return true;
    }
    else if (arrayIncludes("0O", "3O", "6O")) {
        drawWinLine(100, 50, 100, 558);
        return true;
    }
    else if (arrayIncludes("1O", "4O", "7O")) {
        drawWinLine(304, 50, 304, 558);
        return true;
    }
    else if (arrayIncludes("2O", "5O", "8O")) {
        drawWinLine(508, 50, 508, 558);
        return true;
    }
    else if (arrayIncludes("6O", "4O", "2O")) {
        drawWinLine(100, 508, 510, 90);
        return true;
    }
    else if (arrayIncludes("0O", "4O", "8O")) {
        drawWinLine(100, 100, 520, 520);
        return true;
    }
    else if (selectedSquares.length >= 9) {
        audio('./media/snap.wav');
        document.getElementById("gameDisplay").innerHTML = "TIE GAME! Play again?";
        setTimeout(function () { resetGame(); }, 2000);
        return true;
        
    }
    else { return false; }

    //Function checks if an array inclues 3 strings and is used for win conditions
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)

        if (a === true && b === true && c === true) { return true }
    }
}

// makes body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function() { body.style.pointerEvents = "auto";}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}


function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines")
    const c = canvas.getContext("2d");

    let x1 = coordX1, //inidcates start of x axis line
        y1 = coordY1, //indicate start of y axis line
        x2 = coordX2, //end of x axis
        y2 = coordY2, //end of y axis
        x = x1, //stores temporary x axis that updates in animation loop
        y = y1; //temporary y axis

    
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608) //clear content from last loop
        c.beginPath(); //starts new path
        c.moveTo(x1,y1)
        c.lineTo(x,y)
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70,255,33,0.8)";
        c.stroke();

        //checks if we've reached enpoint
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        // necessary for diagonal win conditions
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //function clears canvas after win line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winner.wav');
    animateLineDrawing();
    document.getElementById("gameDisplay").innerHTML = "WE HAVE A WINNER!";
    setTimeout(function () { clear(); resetGame(); }, 2000);
}


//function resets game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = "";
    }
    selectedSquares = [];

}