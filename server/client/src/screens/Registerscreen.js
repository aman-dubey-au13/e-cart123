import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { registerNewUser } from '../actions/userActions'
import Loader from '../component/Loader'
import Error from '../component/Error'
import Success from '../component/Success'

export default function Registerscreen() {

     const registerstate = useSelector(state=>state.registerNewUserReducer)
     const {loading,error,success} = registerstate
    const [name, setname] = useState('')
    const [email, setemail] = useState('')

    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const dispatch = useDispatch()

    function register(e) {

        e.preventDefault()
        const user = {
            name: name,
            email: email,
            password: password
        }


        if (password == cpassword) 
        {
            dispatch(registerNewUser(user))
        }
        else {
            alert('Passwords not matched')
        }
    }

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-5 card p-3' style={{ marginTop: '150px' }}>
                    <div className='div'>
                        <h2 className='text-center m-3'>Register</h2>
                        {loading && (<Loader/>)}
                        {error && (<Error error='email address is already registred'/>)}
                        {success && (<Success success='your registration successful'/>)}

                        <form onSubmit={register}>


                            <input type='text' required placeholder='name' className='form-control' value={name} onChange={(e) => { setname(e.target.value) }}></input>

                            <input type='text' required placeholder='email' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }}></input>

                            <input type='text' required placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }}></input>
                            <input type='text' required placeholder='confirm password' className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }}></input>

                            <div className='text-end'>
                                <button type='submit' className="btn mt-3">
                                    REGISTER

                                </button>


                            </div>
                        </form>
                        <a href="/login">click Here To Login</a>


                    </div>
                </div>
            </div>
        </div>
    )
}