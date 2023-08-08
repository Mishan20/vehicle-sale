let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();


//importing the vehicle model
let vehicleSchema = require('../Models/Vehicle');
//const { Router } = require('express');

//creating the vehicle
router.route('/create-vehicle').post((req,res,next) => {
    vehicleSchema.create(req.body, (error,data)=> {
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//reading vehicles

router.route('/').get((req,rest) => {
    vehicleSchema.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});


//get a particular detail

router.route('/edit-vehicle/:id').get((req,res) => {
    vehicleSchema.findById(req.params.id,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});


//update vehicle data

router.route('/update-vehicle/:id').put((req,res,next) => {
    vehicleSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
       }, (error,data => {
            if(error){
              return next(error)
            }else{
              res.json(data)
              console.log('vehicle updated Successfully')
            }
    }))
});

// delete vehicle data

router.route('/delete-vehicle/:id').delete((req,res,next) => {
    vehicleSchema.findByIdAndRemove(req.params.id,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.status(200).json({
               msg: data
            })
        }
    })
})

module.exports = router;

