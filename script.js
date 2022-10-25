// Array Visualizer

// HTML Variables
let containerEl = document.getElementById("container");

// Global Variable

let myData = [];
for (let n = 1; n <= 20; n++) {
    myData.push(Math.random() * 600)
}

// Display Data
drawArray();

function drawArray() {
    let outputStr = "";
    for (let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height:${myData[i]}px"></div>`
    }
    containerEl.innerHTML = outputStr;
}

// Key Events Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    // Modify the Array
    for (let i = 0; i < myData.length; i++) {
        myData[i] = 400;
    }

    // Redraw the Array
    drawArray();
}