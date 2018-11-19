

//document.querySelector('html').onclick = function () {
//    alert('Hey! Quit clicking on me right now!');
//}
//^ this makes it so that if you click anywhere on the page,
//it will cause a pop-up box with the words "hey! quite click..."
var myImage = document.querySelector('img');

/*myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shadow-ridge-logo') {
        myImage.setAttribute ('src', 'images/firefox2.jpg');

    } else {
        myImage.setAttribute ('src', 'images/shadow-ridge-logo');
    }
} */


var myClue1 = document.querySelector("#clue1").onclick = function() {
    var x = document.getElementById("tidbit1"); {
    
        x.style.display = "block";
    }
    var n = document.getElementById("clue1");
        n.style.display = "none";
   
}

var myClue1hover = document.querySelector("#clue1").onmouseenter = function() {
    var z = document.getElementById("clue1");
        z.style.left = 580 + "px";
        z.style.bottom = 700 + "px";
}

var myClue1hover = document.querySelector("#tidbit1").onmouseover = function() {
    var t = document.getElementById("tidbit1");
        t.style.left = 840 + "px";
        t.style.top = 400 + "px";
}

var myClue2 = document.querySelector("#tidbit1").onclick = function() {
    var y = document.getElementById("tidbit2");
    
        y.style.display = "block";
    var m = document.getElementById("tidbit1");   
        m.style.display = "none";
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

   // function setUserName() {
   // var myName = prompt('Please enter your name.');
   // localStorage.setItem('name', myName);
   // myHeading.textContent = 'Shadow Ridge is cool, ' + myName;
//}

//if(!localStorage.getItem('name')) {
//    setUserName();

//} else {
//    var storedName = localStorage.getItem('name');
//    myHeading.textContent = 'Shadow Ridge is cool, ' + storedName;
//}

