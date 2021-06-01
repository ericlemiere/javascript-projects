const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    Operator: null,
};


//this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    //now we check to see if Wait Second Operand is true
    // and set Display Value to the key that was clicked
    if(Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else {
        //overwrites Display Value if current value is 0... otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}


// this section handles decimal points
function Input_Decimal(dot) {
    //this ensures accidental clicking of decimal point doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
        // the above checks if there is already a decimal entered
    }
}


// OPERATOR SECTION
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, Operator } = Calculator
    //when an operator is pressed, we convert the current number displayed
    //on the screen to a number and store it in Calculator.First_Operand if it doesnt already exist
    
    const Value_Of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait Second Operator is true
    //then updates the operator and exits the function

    if (Operator && Calculator.Wait_Second_Operand) {
        Calculator.Operator = Next_Operator;
        return;
    }
    if (First_Operand == null) { 
        Calculator.First_Operand = Value_Of_Input;
    }
    else if (Operator) { //checks if operator exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator
        //in the Perform_Calculation object and the function
        //that matches the operator is executed
        let result = Perform_Calculation[Operator](Value_Now, Value_Of_Input);

        //here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        //this will remove trailing zeros
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.Operator = Next_Operator;
}


const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.Operator = null;
}


function Update_Display() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display();

//This section monitors BUTTON CLICKS

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    // target variable is an object representing the element that was clicked

    const { target } = event;
    //if element clicked isn't a button, exit the function
    if (!target.matches("button")) {
        return;
    }
    if (target.matches("button")) {
        audio('./Sounds/buttonClick.wav');
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    
    Input_Digit(target.value);
    Update_Display();
})



// play click sound when using calculator
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}