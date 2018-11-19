var g = document.getElementById("oak2");
var h = document.getElementById("oak3");
var i = document.getElementById("oakb2");

var myCluec = document.querySelector("#oakb3").onclick = function() {
    var f = document.getElementById("oak");
        f.style.display = "none";
        g.style.display = "block";
}

var myClued = document.querySelector("#oakb4").onclick = function () {
    
    h.style.display = "block";
    g.style.visibility = "hidden";
    i.style.visibility = "visible";
}

const form = document.querySelector('form');
const ul = document.querySelector('ol');
const input = document.getElementById('item');
const liMaker = (text) => {
    const li = document.createElement('li');
 
    if(text === 'light') {
        li.textContent = 'That is correct. Type SPRINGER at check-out for a 25% discount!';
        ul.appendChild(li);
    }

    else {
   
    li.textContent = 'This does not feel right';
    ul.appendChild(li); 
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    liMaker(input.value);
    input.value = "";
});

