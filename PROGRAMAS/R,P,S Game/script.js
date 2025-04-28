
// program to get a random item from an array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
const array = [0, 1, 2];

//Function that represents ROCK simble
function executeGame1() {
    var botDivParagraph = document.getElementById("botAIParagraph")
    var botDivParagraph2 = document.getElementById("botAIParagraph2")
    //get random item in array
    const result = getRandomItem(array);
    if (result == 0) {
        //if its rock
        botDivParagraph.innerHTML = "&#x1F44A; <br/>"
        botDivParagraph2.innerHTML = "That's a TIE!"
     } else if (result == 1) {
        //if its paper
        botDivParagraph.innerHTML = "&#x270B; <br/>"
        botDivParagraph2.innerHTML = "That's a LOST!"
    } else if (result == 2) {
        //if its scissors
        botDivParagraph.innerHTML = "&#9996; <br/>"
        botDivParagraph2.innerHTML = "That's a WIN!"
    }

}
//Function that represents PAPER simble
function executeGame2() {
    var botDivParagraph = document.getElementById("botAIParagraph")
    var botDivParagraph2 = document.getElementById("botAIParagraph2")
    //get random item in array
    const result = getRandomItem(array);
    if (result == 1) {
        //if its paper
        botDivParagraph.innerHTML = "&#x270B; <br/>"
        botDivParagraph2.innerHTML = "That's a TIE!"
     } else if (result == 2) {
        //if its scissors
        botDivParagraph.innerHTML = "&#9996; <br/>"
        botDivParagraph2.innerHTML = "That's a LOST!"
    } else if (result == 0) {
        //if its rock
        botDivParagraph.innerHTML = "&#x1F44A; <br/>"
        botDivParagraph2.innerHTML = "That's a WIN!"
    }

    
    
}
//Function that represents SCISSORS simble
function executeGame3() {
    var botDivParagraph = document.getElementById("botAIParagraph")
    var botDivParagraph2 = document.getElementById("botAIParagraph2")
    //get random item in array
    const result = getRandomItem(array);
    if (result == 2) {
        //if its scissors
        botDivParagraph.innerHTML = "&#9996; <br/>"
        botDivParagraph2.innerHTML = "That's a TIE!"
     } else if (result == 0) {
        //if its rock
        botDivParagraph.innerHTML = "&#x1F44A; <br/>"
        botDivParagraph2.innerHTML = "That's a LOST!"
    } else if (result == 1) {
        //if its paper
        botDivParagraph.innerHTML = "&#x270B; <br/>"
        botDivParagraph2.innerHTML = "That's a WIN!"
    }
}

function Reset() {
    var botDivParagraph = document.getElementById("botAIParagraph")
    var botDivParagraph2 = document.getElementById("botAIParagraph2")
    botDivParagraph.innerHTML = ""
    botDivParagraph2.innerHTML = ""
}