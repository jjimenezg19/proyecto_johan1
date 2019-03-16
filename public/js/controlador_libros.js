'use strict'

const input_isbn = document.querySelector('#txt_code');
const input_titulo = document.querySelector('#txt_title');
const input_categoria = document.querySelector('#txt_category');
const input_editorial = document.querySelector('#txt_editorial'); 
const input_autor = document.querySelector('#txt_autor');  
const input_precio = document.querySelector('#txt_price');  

let validar = () => {
    let error = false;

    if (input_isbn == '') {
        error = true;
        input_isbn.classList.add('error_input');
    } else {
        input_isbn.classList.remove('error_input');
    }

    if (input_titulo == '') {
        error = true;
        input_titulo.classList.add('error_input');
    } else {
        input_titulo.classList.remove('error_input');
    }

    if (input_categoria == '') {
        error = true;
        input_categoria.classList.add('error_input');
    } else {
        input_categoria.classList.remove('error_input');
    }

    if (input_editorial == '') {
        error = true;
        input_editorial.classList.add('error_input');
    } else {
        input_editorial.classList.remove('error_input');
    }

    if (input_autor == '') {
        error = true;
        input_autor.classList.add('error_input');
    } else {
        input_autor.classList.remove('error_input');
    }

    if (input_precio == '') {
        error = true;
        input_precio.classList.add('error_input');
    } else {
        input_precio.classList.remove('error_input');
    }
};

let obtener_datos = () =>{

        if (validar() == false) {
            let isbn = input_isbn.value;
            let titulo = input_titulo.value;
            let categoria = input_categoria.value;
            let editorial = input_editorial.value;
            let autor = input_autor.value;
            let precio = input_precio.value;

            registrar_libros(isbn, titulo, categoria, editorial, autor, precio);
        } else {
            swal.fire({
                type: 'warning',
                title: 'El libro no se envio',
                text: 'Por favor revise los campos resaltados'
            });
        
        }
};