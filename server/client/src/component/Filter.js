import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { filterProducts } from '../actions/productActions'
export default function Filter() {

    const[searchKey,setsearchkey] = useState('')
    const[sort,setsort] = useState('popular')
    const[category,setcategory] = useState('all')
    const dispatch = useDispatch();

    
    return (
        <div className='card'>
            <div className='row justify-content-center'>
                <div className='col-md-4 mt-2 ml-2'>
                    <input 
                    value={searchKey}
                    onChange={(e)=>{setsearchkey(e.target.value)}}
                    type='text' placeholder='search products' className='form-control' />


                </div>
                <div className='col-md-2 mt-4 ml-2'>
                    <select className='form-control' value={sort} onChange={(e)=>{setsort(e.target.value)}}>
                        <option value='popular'>Popular</option>
                        <option value='htl'>High To Low</option>
                        <option value='lth'>Low To High</option>
                    </select>

                </div>
                <div className='col-md-2 mt-4 ml-2'>
                    <select className='form-control' value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                    <option value='all'>All</option>
                    <option value='electronics'>Electronics</option>
                    <option value='fashion'>fashion</option>
                    <option value='mobiles'>mobiles</option>

                    </select>
                </div>
                <div className='col-md-2 mt-4 ml-2'>
                    <button className='btn' onClick={()=>{dispatch(filterProducts(searchKey,sort,category))}}>FILTER</button>

                </div>
            </div>
        </div>
    )
}