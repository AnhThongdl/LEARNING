var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);
console.log(typeof num1,typeof num2);


var addBtn = document.getElementById("addBtn");
var subBtn = document.getElementById("subBtn");
var mulBtn = document.getElementById("mulBtn");
var devBtn = document.getElementById("devBtn");

var result = document.getElementById("result");
console.log(result);

addBtn.addEventListener('click', function() {
    result.innerHTML = num1 + num2;
});

