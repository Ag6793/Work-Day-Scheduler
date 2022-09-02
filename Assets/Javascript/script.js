var saveBtn = document.querySelector(".saveBtn"); 
var currentDay = document.getElementById("currentDay");

// moment().format("MMM Do YY"); 
function todaysDate() {
    $("#currentDay").text(moment().format("dddd, MMM Do YY"));
};

todaysDate();

