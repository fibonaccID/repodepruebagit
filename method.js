const h1 = document.querySelector('h1')
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

form.addEventListener("mouseover", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();

    alert("virus")
}
