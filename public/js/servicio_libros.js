'use strict';

let registrar_libros = (pisbn, ptitulo, pcategoria, peditorial, pautor, pprecio) => {

  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_libros",
    method: "POST",
    data: {
      isbn: pisbn,
      titulo: ptitulo,
      categoria: pcategoria,
      editorial: peditorial,
      autor: pautor,
      precio : pprecio
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El registro fue enviado',
      text: 'El registro fue guardado éxitosamente'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El registro no pude ser enviado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};