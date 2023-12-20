function soma(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var total = num1 + num2;
    document.getElementById("result").innerHTML = "Total: "+total;
}
function subtracao(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var total = num1 - num2;
    document.getElementById("result").innerHTML = "Total: "+total;
}
function multiplicacao(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var total = num1 * num2;
    document.getElementById("result").innerHTML = "Total: "+total;
}
function divisao(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var total = num1 / num2;
    document.getElementById("result").innerHTML = "Total: "+total;
}
