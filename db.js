import { Schema } from 'mongoose';

var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/');


var gameSchema = new Schema({
    id: {type: String, required: true, unique: true},
    titulo: {type: String, required: true},
    sinopse: String,
    tags: Array,
    preco: Boolean,
    lancamento: Date,
    desenvolvedor: String,
    editor: String,
    genero: Array,
    imagem: String,
    rating: Boolean
}); 

var Game = mongoose.model('Game', gameSchema);
module.exports = Game;