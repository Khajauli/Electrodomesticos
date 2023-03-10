'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var electrodomesticoSchema = Schema({
    nombre:String,
    estado:String,
    precio:Number,
    descripcion:String,
    imagen:String
});

module.exports=mongoose.model('Electrodomestico', electrodomesticoSchema);