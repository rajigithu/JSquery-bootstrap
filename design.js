let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allBorders, allColors, allPixels;
allColors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "maroon", "silver", "gold", "lavender"]
allBorders = ["dotted", "dashed", "solid"];
// allPixels = ["1px", "2px", "3px", "4px", "5px"];
firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');
btn1 = document.getElementById("changebtn1");
btn2 = document.getElementById("changebtn2");
btn3 = document.getElementById("changebtn3");
btnall = document.getElementById("changebtnall");
function changeBoxOne() {
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}
function changeBoxTwo() {
    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}
btn1.addEventListener("click", changeBoxOne);
btn2.addEventListener("click", changeBoxTwo);