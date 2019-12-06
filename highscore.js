var body = document.body;
var main = document.querySelector(".mainScore");
var listClear = document.querySelector(".listClear");
var listContainer = document.querySelector(".listcontainer");
var liElement = document.querySelector("li");

var backButton = document.createElement("button");
var clearButton = document.createElement("button");

//set Attributes
body.setAttribute("style", "max-width: 630px; margin: auto; margin-top: 40px;")
main.setAttribute("style", "max-width: 630px; margin-top: 40px;");
backButton.setAttribute("style", "margin-top: 20px");
backButton.setAttribute("class", "btn btn-info");
clearButton.setAttribute("style", "margin-top: 20px; margin-left: 40px;");
clearButton.setAttribute("class", "btn btn-info");

//Functions
function replacePage() {
    location.replace("index.html")
}

scoreDisplay = localStorage.getItem("scores");
initialsDisplay = localStorage.getItem("initials");
scoreDisplay = JSON.parse(scoreDisplay);
initialsDisplay = JSON.parse(initialsDisplay);
if (scoreDisplay != null) {

    for (i = 0; i < scoreDisplay.length; i++) {
        //create Elements
        var scoreLi = document.createElement("li");
        var rowDiv = document.createElement("div");
        var col1 = document.createElement("div");
        var col2 = document.createElement("div");
        // scoreLi.innerHTML = ("Name : " + initialsDisplay[i] + " Score : " + scoreDisplay[i]);

        //Set Attributes
        scoreLi.setAttribute("class", "list-group-item text-left");
        scoreLi.setAttribute("id", "grab");
        rowDiv.setAttribute("class", "row");
        col1.setAttribute("class", "col text-center");
        col2.setAttribute("class", "col text-center");

        //set and append
        col1.innerHTML = ("Name : " + initialsDisplay[i]);
        col2.innerHTML = ("Score : " + scoreDisplay[i]);

        listContainer.append(scoreLi);
        scoreLi.append(rowDiv);
        rowDiv.append(col1);
        rowDiv.append(col2);

    }
}

backButton.onclick = function () {
    replacePage();
}

clearButton.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});

// Set Elements
backButton.textContent = "BACK";
main.appendChild(backButton);
clearButton.textContent = "CLEAR HIGH SCORE"
main.appendChild(clearButton);