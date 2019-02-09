'use strict';
const input_nombre = document.querySelector('#txt_nombre');
const input_correo = document.querySelector('#txt_correo');
const text_comentario = document.querySelector('#txt_comentario');
const boton_enviar = document.querySelector('#btn_enviar');

let nombre = '';
let correo = '';
let sexo = '';
let comentario ='';


let validar = () =>{
    let error = false; //False : no hay errores, true: hay errores

    if(input_nombre.value == ''){
        input_nombre.classList.add('error_input');
    }else{
        input_nombre.classList.remove('error_input');
    }

    
};

let mostrarDatos = () => {
    const boton_sexo = document.querySelector('input[name=rbt_sexo]:checked');

    validar(); //llamada a la función de validar
    // Si está correctamente validado se muestra todo éste bloque
    nombre = input_nombre.value;
    correo = input_correo.value;
    sexo = boton_sexo.value;
    comentario = text_comentario.value;

    console.log(`Saludos ${nombre} usted es : ${sexo} y su comentario fue: "${comentario}" le estaremos respondiendo pronto al correo: ${correo}`);

    // Fin del bloque de mostrar mensaje

};


boton_enviar.addEventListener('click' , mostrarDatos);