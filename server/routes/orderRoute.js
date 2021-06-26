const { v4: uuidv4 } = require('uuid');
const express = require ('express');
const router = express.Router();
const stripe = require('stripe')("sk_test_51J0QAKSCZCeqbOTwhApaxSxhv4RqFmTCMazQgC7rnBdsNx7mjGjlBNOriojg4wfYvkmRQl8Cp4T1nXBF7V5ODGwz00a5XMYwvN")

router.post('/placeorder',async(req,res)=>{
    const {token,cartItems,currentUser,subtotal}=req.body
    const customer = await stripe.customers.create({
        email:token.email,
        source:token.id
    })
    const payment = await stripe.charges.create({
        amount:subtotal*100,
        currency:'inr',
        customer:customer.id,
        receipt_email:token.email
    },{
        idempotencyKey:uuidv4()
    })
    if(payment)
    {
        res.send('payment successful')
    }
    else{
        res.status(400).json({message:'payment failed'});
    }
})

module.exports = router