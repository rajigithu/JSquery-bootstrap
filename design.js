let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allBorders, allColors, allPixels, btn4, btn5, btn6, hidebtnall, resetbtn, showallbtn;
allColors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "maroon", "silver", "gold", "lavender", "cyan", "white", "darkgreen"]
allBorders = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
// allPixels = ["1px", "2px", "3px", "4px", "5px"];
firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');
btn1 = document.getElementById("changebtn1");
btn2 = document.getElementById("changebtn2");
btn3 = document.getElementById("changebtn3");
btnall = document.getElementById("changebtnall");
btn4 = document.getElementById("hidebtn1");
btn5 = document.getElementById("hidebtn2");
btn6 = document.getElementById("hidebtn3");
hidebtnall = document.getElementById("hidebtnall");
resetbtn = document.getElementById("resetbtn")
showallbtn = document.getElementById("showallbtn")
function changeBoxOne() {
        firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
        firstbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
    
}
function changeBoxTwo() {
    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}
function changeBoxThree() {
    thirdbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    thirdbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}
function changeAllBoxes() {
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
    thirdbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    thirdbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}
function hideBoxOne() {
    firstbox.style.display = "none";
}
function hideBoxTwo() {
    secondbox.style.display = "none";
}
function hideBoxThree() {
    thirdbox.style.display = "none";
}
function hideAllBoxes() {
    firstbox.style.display = "none";
    secondbox.style.display = "none";
    thirdbox.style.display = "none";
}
function showAllBoxes() {
    firstbox.style.display = "block";
    secondbox.style.display = "block";
    thirdbox.style.display = "block";
}
function resetBoxes() {
    firstbox.style.removeProperty('background-color');
    firstbox.style.removeProperty('border');
    secondbox.style.removeProperty('background-color');
    secondbox.style.removeProperty('border');
    thirdbox.style.removeProperty('background-color');
    thirdbox.style.removeProperty('border');
}
btn1.addEventListener("click", changeBoxOne);
btn2.addEventListener("click", changeBoxTwo);
btn3.addEventListener("click", changeBoxThree);
btnall.addEventListener("click", changeAllBoxes);
btn4.addEventListener("click", hideBoxOne);
btn5.addEventListener("click", hideBoxTwo);
btn6.addEventListener("click", hideBoxThree);
hidebtnall.addEventListener("click", hideAllBoxes);
showallbtn.addEventListener("click", showAllBoxes);
resetbtn.addEventListener("click", resetBoxes);









