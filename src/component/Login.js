import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import './signup.css'
import img from './images/img.gif'





function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function login() {

        localStorage.getItem("name")
        localStorage.getItem("email")
        localStorage.getItem("password")
        setName('')
        setEmail('')
        setPassword('')



        if (email != localStorage.getItem("email") || name === "" || email === "" ) {
            alert(" user not found")
        }
        else if (password != localStorage.getItem("password")) {
            alert(" incorrect password")
        }
        else {
            alert("login sucess")
        }

    }
    return (
        <>
            <div className="main">
                <div className="box">
                <div className="imag" >
                        <img src={'https://img.freepik.com/free-vector/admin-concept-illustration_114360-2139.jpg?w=2000'} />

                    </div>
                    <div className="form_part">
                        <div className="form">

                            <h1>Login</h1>
                            <div className="input">
                                <input className='input' type='text' placeholder='Enter Your Name' value={name} onChange={e => setName(e.target.value)} /><br />
                                <input className='input' type='email' placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)} /><br />
                                <input className='input' type='password' placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)} /><br />
                            </div>
                            <div className="buttons">
                                {
                                    name != localStorage.getItem('name') || email != localStorage.getItem('email') || password != localStorage.getItem('password') ?
                                        <Link to='/Login' style={{ color: "white" }} onClick={login}>Login</Link>
                                        : <Link to='/Olx' style={{ color: "white" }} onClick={login}>Login</Link>
                                }
                            </div>

                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Login
