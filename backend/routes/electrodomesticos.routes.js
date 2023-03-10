'use strict'
var express=require('express');
var router=express.Router();
var electrodomesticosRouter = require('../controllers/electrodomesticos.controllers');
var multiparty=require('connect-multiparty');
var multupartyMiddleWare=multiparty({uploadDir:'./uploads'});

router.get('/inicio',electrodomesticosRouter.getInicio);
router.post('/guardarElectro',electrodomesticosRouter.saveElectrod);
router.get('/electrodomesticos',electrodomesticosRouter.getElectrodomesticos);
router.get('/electrodomestico/:id',electrodomesticosRouter.getElectrodomestico);
router.put('/electrodomestico/:id',electrodomesticosRouter.updateElectrodomestico);
router.delete('/electrodomestico/:id',electrodomesticosRouter.deleteElectrodomestico);
router.post('/subir-imagen/:id',multupartyMiddleWare,electrodomesticosRouter.uploadImage);
router.get('/get-imagen/:imagen',electrodomesticosRouter.getImage);
router.get('/electoByNombre/:nombre',electrodomesticosRouter.getElectrobyNombre);

module.exports=router; 