const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const User = require('../model/userModel')
const { Router } = require('express')

router.post('/register',(req,res)=>{

    User.find({email:req.body.email},(err,docs)=>{
        if(docs.length>0)
        {
            return res.status(400).json({message:'something went wrong'});
        }
        else{
            const newuser = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })

            newuser.save(err =>{
                if(!err)
                {
                    res.send('user registration success')
                }
                else{
                    res.send('something went wrong')
                }
            })
        }
        if(err)
        {
            return res.status(400).json({message:'something went wrong'})
        }
    })
})


router.post('/login',(req,res)=>{
    User.find({email:req.body.email,password:req.body.password},(err,docs)=>{
        if(docs.length>0)
        {   
            const user={
                name:docs[0].name,
                _id:docs[0]._id,
                email:docs[0].email
            }
            res.send(user)
        }
        else{
            return res.status(400).json({message:'invalid Credentilas'});
        }
    })
})

// router.get('/getallusers',(req,res)=>{
//     User.find({},(err,docs)=>{
//         if(err){
//             return res.status(400).json({message:'something want wrong'});

//         }
//         else{
//             res.send(docs)
//         }
//     })
// })


module.exports = router