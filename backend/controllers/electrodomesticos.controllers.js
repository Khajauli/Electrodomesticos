'use strict'
var Electrodomestico=require('../models/electrodomestico');
var fs=require('fs');
var path=require('path');
const { exists } = require('../models/electrodomestico');
var controller={
    getInicio:function(req,res){
        return res.status(201).send(
            "<h1>Inicio<h1>"
        );
    },
    saveElectrod:function(req,res){
        var electrodomestico=new Electrodomestico();
        var params=req.body;
        electrodomestico.nombre=params.nombre;
        electrodomestico.estado=params.estado;
        electrodomestico.precio=params.precio;
        electrodomestico.descripcion=params.descripcion;
        electrodomestico.imagen=null;
        electrodomestico.save((err,electroGuardado)=>{
            if(err) return res.status(500).send({message:"Error al guardar"});
            if(!electroGuardado) return res.status(404).send({message:'No se ha guardado el electrodomestico'});
            return res.status(200).send({electrodomestico:electroGuardado});
        })
    },
    
    getElectrodomesticos:function(req,res){
        Electrodomestico.find({}).sort().exec((err,electrodomesticos)=>{
            if(err) return res.status(500).send({message:"Error al recuperar los datos"});
            if(!electrodomesticos) return res.status(404).send({message:'No existen electrodomesticos'});
            return res.status(200).send({electrodomesticos});
        })
    },
    getElectrodomestico:function(req,res){
        var electrodomesticoId=req.params.id;
        if(electrodomesticoId==null) return res.status(4004).send({message:"El electrodomestico no existe"});
        Electrodomestico.findById(electrodomesticoId,(err,electrodomestico)=>{
            if(err) return res.status(500).send({message:"Error al recuperar los datos"});
            if(!electrodomestico) return res.status(404).send({message:'No existe el electrodomestico'});
            return res.status(200).send({electrodomestico});
        })
    },
    deleteElectrodomestico:function(req,res){
        var electrodomesticoId=req.params.id;
        if(electrodomesticoId==null) return res.status(4004).send({message:"El Electrodomestico no existe"});
        Electrodomestico.findByIdAndRemove(electrodomesticoId,(err,electroBorrado)=>{
            if(err) return res.status(500).send({message:"Error al eliminar los datos"});
            if(!electroBorrado) return res.status(404).send({message:'No se puede eliminar el Electrodomestico'});
            return res.status(200).send({electroBorrado});
        })
    },
    updateElectrodomestico:function(req,res){
        var electrodomesticoId=req.params.id;
        var update=req.body;
        if(electrodomesticoId==null) return res.status(4004).send({message:"El electrodomestico no existe"});
        Electrodomestico.findByIdAndUpdate(electrodomesticoId,update,{new:true},(err,electroActualizado)=>{
            if(err) return res.status(500).send({message:"Error al actualizar los datos"});
            if(!electroActualizado) return res.status(404).send({message:'No se puede actualizar el electodomestico'});
            return res.status(200).send({electroActualizado});
        })
    },
    uploadImage:function(req,res){
        var electrodomesticoId=req.params.id;
        var fileName="Imagen no subida";

        if(req.files){
            var filePath=req.files.imagen.path;
            var file_split=filePath.split('\\');
            var fileName=file_split[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif'){
                Electrodomestico.findByIdAndUpdate(electrodomesticoId,{imagen:fileName},{new:true},(err,electroActualizado)=>{
                    if (err) return res.status(500).send({message:"La imagen no se ha subido"});
                    if(!electroActualizado) return res.status(404).send({message:'El electrodomestico no existe y no se subio la imagen'});
                    return res.status(200).send({electrodomestico:electroActualizado});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:"La extension no es valida"});
                })
            }

        }else{
            return res.status(200).send({message:fileName});

        }

    },
    getImage:function(req,res){
        var file=req.params.imagen;
        var path_file="./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if(exists) {
                return res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:"No existe la imagen"});
            }
        });
    },
    getElectrobyNombre:function(req,res){
        var nombre=req.params.nombre;
        if(nombre==null) return res.status(4004).send({message:"El electrodomestico no existe"});
        Electrodomestico.find({nombre},(err,electrodomestico)=>{
            if(err) return res.status(500).send({message:"Error al recuperar los datos"});
            if(!electrodomestico) return res.status(404).send({message:'No existe el electrodomestico'});
            return res.status(200).send({electrodomestico});
        })
    },
    
}
module.exports=controller;