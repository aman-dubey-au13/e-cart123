import React from 'react';
import axios from 'axios';
import Product from '../component/Product';
import Loader from '../component/Loader';
import Error from '../component/Error';
import Filter from '../component/Filter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';



export default function Homescreens() {

    const getallproductsstate = useSelector(state => state.getAllProductsReducer);

    const { loading, products, error } = getallproductsstate
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())


    }, [])


    return (
        
        <div>
            <Filter/>
            <div className="row justify-content-center">
                {loading ? (<Loader/>) : error ? (<Error error='something went wrong...'/>) : (
                    products.map(product => {
                        return <div className='col-md-3 m-2 p-2 card'>
                            <Product product={product} />
                        </div>
                    })
                )}

            </div>

        </div>
    )
}
