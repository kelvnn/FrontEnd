function area(){
    var altura = parseFloat(document.getElementById("alt").value);
    var largura = parseFloat(document.getElementById("larg").value);
    var total = largura*altura;
    document.getElementById("result").innerHTML = "Área: "+total;
}