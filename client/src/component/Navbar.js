import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../actions/userActions'
// import {addToCartReducer} from '../reducers/cartReducer'

export default function Navbar() {

    const cartReducer = useSelector(state => state.cartReducer)
    const { cartItems } = cartReducer
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const dispatch = useDispatch()




    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">E-Cart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <div className="navbar-nav ml-auto ">
                            {currentUser ? (
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {currentUser.name}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/profile">Profile</a>
                                        <a className="dropdown-item" href="/orders">Orders</a>
                                        <li className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>Logout</li>
                                    </div>
                                </div>
                            ) : (<li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>)}


                            <li className="nav-item ">
                                <a className="nav-link" href="/cart" tabindex="-1" aria-disabled="true"><i className="fas fa-shopping-cart"></i>{cartItems.length}</a>
                            </li>

                        </div>

                        {/* <ul className="navbar-nav ml-auto ">
                            <li className="nav-item ">
                                <a className="nav-link" href="/cart" tabindex="-1" aria-disabled="true"><i className="fas fa-shopping-cart"></i>{cartItems.length}</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}