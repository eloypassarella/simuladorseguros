
let nuevoCliente = [];


class Cliente {
    constructor (nombre, email, nombreDeLaaseguradora, marca , valor, anio){
        this.nombre= nombre;
        this.email = email;
        this.nombreDeLaaseguradora = nombreDeLaaseguradora;
        this.marca = marca;
        this.valor= valor;
        this.anio = anio;
        this.valorDelseguro = [];
        this.cotizar= false
        }

    resultado = function (){
        this.valorDelseguro = parseInt((this.valor * valorAuto)+aseguradora[this.nombreDeLaaseguradora]);
        return this.valorDelseguro;
        }

    cotizado = function (){
        console.log ("El cliente fue cotizado y atendido por "+ this.nombreDeLaaseguradora);
        this.cotizar = true;
        $("#nuevocliente").append(`<div class="alert alert-success" role="alert">
        <h4 class="alert-heading">¡Gracias por dejar tus datos ${this.nombre.toUpperCase()}!</h4>
        <p>Fuiste cotizado por ${this.nombreDeLaaseguradora}. Te estaremos enviando toda la información por email</p>
        <hr>
        <p class="mb-0">Tu simulación de cotización dio $ ${this.valorDelseguro}.</p>
      </div>`);}}
        
for (const objeto of MARCAS){
        $('#marca').append(`<option value="${objeto.nombre}">${objeto.nombre}</option>`)
    }


let formulario = document.getElementById("formulario");
    formulario.onsubmit= function(mievento){
        mievento.preventDefault();
        console.dir (mievento);
let cliente_1 = new Cliente (formulario.children[0].value,formulario.children[1].value,formulario.children[2].value,formulario.children[3].value,parseInt(formulario.children[4].value),parseInt(formulario.children[5].value));
nuevoCliente.push(cliente_1);
console.log(cliente_1);
cliente_1.resultado();
cliente_1.cotizado();
let unJSON = JSON.stringify(nuevoCliente[0])
localStorage.setItem("cliente_1",unJSON);
let datoGuardado = JSON.parse(localStorage.getItem("cliente_1"));
console.log(datoGuardado);
}




$(".boton").hover (function(){
    $(this).css("color","red");},
    function(){
        $(this).css ("color","blue");
    }
);

$("#titulo").fadeOut(1000).fadeIn (1000);

$ ("#logo").prepend("#logo").animate({fontSize:'2cm',opacity:'0.5'},2000);

//Diseño con JS.