'use strict'

const express = require('express');
const router = express.Router();
const libro_api = require('./libros.api');

router.route('/registrar_libros')
    .post(
        function(req,res){
            libro_api.registrar(req,res);
        }
    );

router.route('/listar_libros')
    .get(
        function(req,res){
            libro_api.listar_libros(req,res);
        }
    );

module.exports = router;