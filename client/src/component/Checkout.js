import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch} from 'react-redux'
import { placeOrder } from "../actions/orderActions";
export default function Checkout({amount}){
    const dispatch = useDispatch()

    function tokenHandler(token)
    {
        dispatch(placeOrder(token,amount));
    }
    return(
        <div>
            <StripeCheckout
            token={tokenHandler}
            amount = {amount*100}
            shippingAddress
            currency='INR'
            stripeKey="pk_test_51J0QAKSCZCeqbOTwKXSEvEZt9rSlQUSicMudJT5Mx01ocyX0L0flmz5QYmKNYj5Yqd341iYfJEsgbeoszlw18Esv00nYkNtqDd"
            
            >
            
                <button className="btn">PAY NOW

                </button>
            </StripeCheckout>
        </div>

    )
}