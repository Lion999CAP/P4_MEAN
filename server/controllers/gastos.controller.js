//const express=require('express');
const Gasto = require('../models/gastos')
//const router=express.Router();
const gastosController = {};

gastosController.getGastos= async(req, res)=> {
    const gastos= await Gasto.find();
    res.json(gastos);
}

gastosController.createGastos= async(req,res)=>{
    const gasto = new Gasto({
        tipo: req.body.tipo,
        ruc: req.body.ruc,
        empresa: req.body.empresa,
        monto: req.body.monto
    });
    await gasto.save();
    res.json('status: Gasto guardado');
   }

gastosController.getGasto=async(req,res)=>{
    const gasto= await Gasto.findById(req.params.id);
    //res.json('status: recibido');
    res.json(gasto);
}

gastosController.editGasto=async(req,res, next)=>{
    const {id}=req.params;
    await Gasto.findByIdAndUpdate(id, {$set: req.body},{new: true});
    res.json('status: Gasto actualizado');
   }

gastosController.deleteGasto=async(req,res, next)=>{
    await Gasto.findByIdAndRemove(req.params.id);
    res.json('status: Gasto borrado');
}

module.exports=gastosController;