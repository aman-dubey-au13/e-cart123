import React, { useState, useEffect } from 'react'
// import products from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import Loader from '../component/Loader';
import Error from '../component/Error';
// import { getProductByIdReducer } from '../reducers/productReducer';


export default function Productdescription({ match }) {
    const productid = match.params.id;
    // const products = []
    // const product = products.find((product) => product.id == productid)
    const dispatch = useDispatch()
    const [quantity,setquantity]=useState(1)

    const getproductbyidstate = useSelector(state => state.getProductByIdReducer)
    const { product, loading, error } = getproductbyidstate

    function addtocart()
    {
        dispatch(addToCart(product,quantity))
    }



    useEffect(() => {
        dispatch(getProductById(productid))
    }, [])

    return (
        <div>

            {loading ? (<Loader/>) : error ? (<Error error='something went wrong...'/>) : (

                <div className='row mt-4'>
                    <div className='col-md-6'>
                        <div className='card p-2 m-4'>
                            <h1>{product.name}</h1>
                            <img src={product.image} className='img-fluid m-3 bigimg' />
                            <p>{product.description}</p>

                        </div>
                    </div>
                    <div className='col-md-6 text-start'>
                        <div className='m-2'>
                            <h1>Price: {product.price}</h1>
                            <hr />
                            <h1>Select Quantity</h1>
                            <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>{[...Array(product.countInStock).keys()].map((x, i) => {
                                return <option value={i + 1}>{i + 1}</option>
                            })}
                            </select>
                            <hr />
                            <button className='btn btn-dark' onClick={addtocart}>Add To Cart</button>
                        </div>
                    </div>

                </div>
            )}



        </div>
    )
}
