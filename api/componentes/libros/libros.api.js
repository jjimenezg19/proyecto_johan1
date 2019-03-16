'use strict'

const model_libro = require('./libros.model');

module.exports.registrar = (req, res) =>{
    let libro_nuevo = new model_libro(
        {
            isbn : req.body.isbn,
            titulo : req.body.titulo,
            categoria : req.body.categoria,
            editorial : req.body.editorial,
            autor : req.body.autor,
            precio : req.body.precio
        }
    );

    libro_nuevo.save(
        function(error){
            if (error) {
                res.json(
                    {
                        success : false,
                        msg :`El libro no pudo ser registrado, error: ${error}`
                    }
                )
            } else {
                res,json(
                    {
                     success : true,
                     msg : `se registro el libro de forma correcta`   
                    }
                )
            }
        }
    );

};

module.exports.listar_libros = (req, res) => {
    model_libro.find().then(
        function(libros){
            if (libros.length > 0) {
                res.json(
                    {
                        success : true,
                        libros : libros
                    }
                )
            } else {
                res.jason (
                    {
                        success : false,
                        libros : `No se encontro ningun libro`
                    }
                )
            }
        }
    )
};