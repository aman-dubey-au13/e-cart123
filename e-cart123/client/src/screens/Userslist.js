import React from 'react'
// import { useState,useEffect } from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import {getAllUsers} from '../actions/userActions'
// import Loader from "../component/Loader"
// import Error from '../component/Error'
export default function Userslist(){

    // const getallusersstate = useSelector(state=>state.getAllUsersReducer)
    // const {users,loading,error}=getallusersstate
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(getAllUsers())
    // },[])



    return (
        <div>
            <h2>
            Userslist
            </h2>
            {/* <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && (<Loader/>)}
                    {error && (<Error error="something went wrong"/>)}
                    {users && (users.map(user=>{
                        return <tr>
                            <td>
                                {user.id}
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                <i className='far fa-trash-alt'></i>
                            </td>
                        </tr>
                    }))}
                </tbody>
            </table> */}
        </div>
    )
}