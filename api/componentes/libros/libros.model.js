'use strict'

let mongoose = require('mongoose');

let schema_libro = new mongoose.Schema(
    {
        isbn : {type : String , unique : true, required : true },
        titulo : {type : String, required : true},
        categoria : {type : String, required : true},
        editorial : {type : String, required : true},
        autor : {type : String, required : true},
        precio : {type : Number, required : true}
    }
);

module.exports = mongoose.model('Libro', schema_libro);
