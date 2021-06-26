const express = require("express");
const Product = require("../model/productModel");
const router  = express.Router();
const product = require('../model/productModel')

router.get('/getallproducts',(req,res)=>{
    product.find({},(err,docs)=>{
        if(!err)
        {
            return res.send(docs);
        }
        else{
            return res.status(400).json({message:'something went wrong'})
        }
    })
});


router.post('/getproductbyid',(req,res)=>{
    Product.find({_id:req.body.productid},(err,docs)=>{
        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({message:'something went wrong'});
        }
    })
})

module.exports= router