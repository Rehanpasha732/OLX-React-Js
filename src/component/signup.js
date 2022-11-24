import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import img from './images/img.gif'
import './signup.css'
import { useNavigate } from 'react-router-dom'


function Signup() {
    let navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  
    // const validate = () => {
    //     if (!validEmail.test(email)) {
    //         setEmail(true);
    //     }
    //     if (!validPassword.test(password)) {
    //         setPassword(true);
    //     }
    // };
 
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    function signup() {

        if(name === "" || email === "" || password === ""){
            alert("fill the vlaue")
            setName('')
            setEmail('')
            setPassword('')
    
        }
    
        else if(!regEx.test(email) && email !== ""){
    
            alert("email is invalid")
            setName('')
            setEmail('')
            setPassword('')
        }
        else{
             localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            setName('')
            setEmail('')
            setPassword('')
            navigate('/Login')
           
        }
        // var firstNameregex = /^\s*$/.test(name);
        // const emailRegex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
        // if (emailRegex.test(email)) {
        //     alert("email is valid")

        // }
        // else if (!emailRegex.test(email) && email != "") {
        //     alert("invalid")
        // }
        // else {
        //     alert("")

        // }




        // const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(email);
        // if (emailRegex === true) {
        //     alert("ok")

        // }
        // if (emailRegex === false) {
        //     alert("invalid")

        // }
        // setEmail("")


       



    }

    return (
        <>
            <div className="main">
                <div className="box">
                    <div className="form_part">
                        <div className="form">
                            <h1>SIGNUP</h1>
                            <div className="inputs">
                                <input className='input' type='text' placeholder='Enter Your Name' value={name} onChange={e => setName(e.target.value)} required /><br />
                                <input className='input' type='email' placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)} required /><br />
                                <input className='input' type='password' placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)} required /><br /></div>

                            <div className="buttons">
                                

                             
                                        <span className='buttons'  style={{ color: "white" }} onClick={signup} >Sign Up</span>

                                


                            </div>
                            {/* {email && alert("invalid")}
                            {password&& alert("invalid")} */}
                        </div>
                    </div>
                    <div className="imag" >
                        <img src={'https://img.freepik.com/free-vector/admin-concept-illustration_114360-2139.jpg?w=2000'} />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
