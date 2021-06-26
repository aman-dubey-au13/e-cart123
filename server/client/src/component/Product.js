import React from 'react'
import { Link } from "react-router-dom";
import Rating from 'react-rating';

export default function Product({ product }) {
    return (
        <div className="text-left" >
            <div>
                <Link to={`product/${product._id}`}>
                    <div className="text-center">
                    <img src={product.image} className='img-fluid' />
                    </div>
                    
                    <h1>{product.name}</h1>
                    <h1>Rating:{product.rating}</h1>
                    <h1>Price : {product.price}</h1>

                </Link>

            </div>
        </div>
    )
}