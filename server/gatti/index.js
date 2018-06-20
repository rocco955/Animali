var express = require('express');
var gatti = express.Router();

var animali = require('../animali').animali;

gatti.get('/', function (req, res) {

    var felini = animali.filter(function (animale) {
        return animale.razza == 'felina';
    })
    res.json(felini);
})

//ricerca gatto per nome... con indirizzo gatti/nome
gatti.get('/:nome', function (req, res) {
    var felini = animali.filter(function (animale) {
        return animale.razza == 'felina';
    })
    var gatto = felini.find(function (felino) {
        return felino.nome == req.params.nome;
    })
    res.json(gatto);
})



module.exports = gatti;