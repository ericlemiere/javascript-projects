// This gets the task from input
function get_todos() {
    var todos = new Array;

    //next var pulls the task that was saved in browser memory
    var todos_str = localStorage.getItem('todo'); 

    //if input is not null, JSON will communicate with the browser to make a JS object
    if(todos_str !== null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

// This adds the inputed task to get_todos array
function add() {
    //create variable of input
    var task = document.getElementById('task').value;

    var todos = get_todos();

    todos.push(task); //adds new task to end of array

    //convert into a string
    localStorage.setItem('todo', JSON.stringify(todos));

    document.getElementById('task').value = "";
    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

// This keeps tasks permanently displayed on screen
function show() {
    var todos = get_todos();

    //set up tasks as an unordered list
    var html = '<ul>';

    //display a task to the list in order that it is input
    for (var i = 0; i < todos.length; i++) {
        html += '<li><button class="remove" id="' + i + '">&check;</button>' + todos[i] + '</li>';
    };

    

    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    //display todo array after item has been removed
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i<buttons.length; i++) {
        buttons[i].addEventListener('click',remove);
    };
}

//display task when 'add item' button is clicked
document.getElementById('add').addEventListener('click',add);

show(); //displays input permanently on screen