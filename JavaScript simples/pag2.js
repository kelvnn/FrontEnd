function IMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var parc = altura *2;
    var total = peso/parc;
    document.getElementById("result").innerHTML ="IMC: "+total;
}
