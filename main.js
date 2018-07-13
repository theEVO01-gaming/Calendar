var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wedenedsay", "Thursday", "Friday", "Saturday"];

// I made custom names for the teams because I didnt like their names.
var streamingTime = ["5-9pm", "5-9PM", "5-9PM", "5-9PM", "5-9PM", "5-9PM", "3-Whenever!", "3-Whenever!", "5-9PM", "5-9PM", "5-9PM", "5-9PM", "5-9PM", "3-Whenever!", "3-Whenever!", "5-9PM", "5-9PM", "5-9PMs", "5-9PM", "5-9PM", "3-Whenever!", "3-Whenever!", "5-9PM", "5-9PM", "5-9PM", "5-9PM", "5-9PM", "3-Whenever!", "3-Whenever!", "5-9PM", "5-9PM", "5-9PM"];



//Function to place daysOfWeek values in header row cells.

function addColumnHeaders() {
    var i = 0;
    do {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
        i++;
    }
    while (i < 7)
}


//function to place day of month value in first p element within each data table cell that has an id.

function addCalenderDates() {
    var i = 1;
    var paragraphs = "";
    do {
        var tableCell = document.getElementById("07-" + i);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[0].innerHTML = i;
        i++;
    }
    while (i <= 31);

}


//Function to place streamingTime values in second p element within each table data cell that has an id

function addGameInfo() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
        var date = i + 1;
        var tableCell = document.getElementById("07-" + date);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[1].innerHTML += streamingTime[i];
    }
}

//function to populate all functions when page loads
function setUpPage() {
    addColumnHeaders();
    addCalenderDates();
    addGameInfo();
}

//runs setUpPage() function when page loads
window.addEventListener("load", setUpPage);