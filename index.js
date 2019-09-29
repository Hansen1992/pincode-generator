
let pincodeBtn = document.getElementById('btnPin');

pincodeBtn.addEventListener('click', generatePin);

function generatePin () {
    min = 0,
    max = 9999;
    let result = ("0" + (Math.floor(Math.random() * (max - min)) + min)).substr(-4);
    document.getElementById('inputPin').innerText = result;
}