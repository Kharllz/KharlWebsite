// window.onload = function(){
//             var name = "Cubacub Ampaguey";
//             alert("NAME: " + name);
//         }


function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    
    
    document.getElementById("result").innerHTML = sum; 
}
function calculateSubstraction() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 - num2;
    
   
    document.getElementById("result").innerHTML = sum; 
}

function calculateMultiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 * num2;
    
   
    document.getElementById("result").innerHTML = sum; 
}

function calculateDivision() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 / num2;
    
   
    document.getElementById("result").innerHTML = sum; 
}