var express = require('express');
var cani = express.Router();

var animali = require('../animali').animali;

cani.get('/', function (req, res) {

    var canini = animali.filter(function (animale) {
        return animale.razza == 'canina';
    })
    res.json(canini);
})

//ricerca cane per nome... con indirizzo cani/nome -> specificando che accetto tutti i caratteri dalla a alla zeta preso piu' volte ([a-z]+)
cani.get('/:nome([a-z]+)', function (req, res) {
    var canini = animali.filter(function (animale) {
        return animale.razza == 'canina';
    });
    var cane = canini.find(function (canina) {
        return canina.nome == req.params.nome;
    });
    res.json(cane);
})

//ricerca cane per id... con indirizzo cani/id -> bisogna specificare che l'id e' un numero (\\d+)
cani.get('/:id(\\d+)', function (req, res) {
    var canini = animali.filter(function (animale) {
        return animale.razza == 'canina';
    })
    var cane = canini.find(function (canina) {
        return canina.id == req.params.id;
    })
    res.json(cane);
})



module.exports = cani;