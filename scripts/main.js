

//document.querySelector('html').onclick = function () {
//    alert('Hey! Quit clicking on me right now!');
//}
//^ this makes it so that if you click anywhere on the page,
//it will cause a pop-up box with the words "hey! quite click..."
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shadow-ridge-logo') {
        myImage.setAttribute ('src', 'images/firefox2.jpg');

    } else {
        myImage.setAttribute ('src', 'images/shadow-ridge-logo');
    }
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

myButton.onclick = function() {
    setUserName();
}