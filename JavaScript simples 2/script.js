function acender() {
    // lampada.src = 'acesa.jpg';
    document.getElementById('lampada').src = 'acesa.jpg'
    document.body.style.backgroundColor = '#fff';
    document.getElementById('titulo').style.color = '#000';
}
function apagar() {
    // lampada.src = 'apagada.jpg';
    document.getElementById('lampada').src = 'apagada.png'
    document.body.style.backgroundColor = '#000';
    document.getElementById('titulo').style.color = '#fff';
}