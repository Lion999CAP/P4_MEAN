//const express=require('express');
const Gasto = require('../models/gastos')
//const router=express.Router();
const gastosCtrl = {};

gastosCtrl.getGastos= async(req, res)=> {
    const gastos= await Gasto.find();
    res.json(gastos);
}

gastosCtrl.createGastos= async(req,res)=>{
    const gasto = new Gasto({
        tipo: req.body.tipo,
        ruc: req.body.ruc,
        empresa: req.body.empresa,
        monto: req.body.monto
    });
    await gasto.save();
    res.json('status: Gasto guardado');
   }

gastosCtrl.getGasto=async(req,res)=>{
    const gasto= await Gasto.findById(req.params.id);
    //res.json('status: recibido');
    res.json(gasto);
}

gastosCtrl.editGasto=async(req,res, next)=>{
    const {id}=req.params;
    await Gasto.findByIdAndUpdate(id, {$set: req.body},{new: true});
    res.json('status: Gasto actualizado');
   }

 gastosCtrl.deleteGasto=async(req,res, next)=>{
    await Gasto.findByIdAndRemove(req.params.id);
    res.json('status: Gasto borrado');
}

module.exports=gastosCtrl;


