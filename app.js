let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('ValorUsuario').value);

    
    if(numeroDeusuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        //el usuario no acerto
        if(numeroDeusuario > numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }



    return;

}
function limpiarCaja(){
    document.querySelector('#ValorUsuario').value = '';
  

}



function generarNumeroSecreto(){


    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo} `)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar numero aleatorio 
    //Inicializar el numero intentos
    condicionesIniciales();
    //desabilitar el boton de juegos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    

}

condicionesIniciales();

