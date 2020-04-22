import React from 'react'
import '../../loginStyle.css'
import { useHistory } from "react-router-dom";
import LoginImg from '../../Images/loginImg.jpg'
const Login =() =>{
    const history = useHistory();
    const formSubmit=() =>{
        localStorage.removeItem("isLogedin")
        localStorage.setItem("isLogedin","yes")
        history.push('/dashboard')

    }
        return (
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-6">
                    <img src={LoginImg} className="loginImg"/>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <form className="loginForm">
            <div className="form-group col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <label htmlFor ="userName">User Name</label>
                <input type="text"
                       id="userName"
                       name="userName" 
                       placeholder="user name"
                      
                ></input>
                </div>
                <div className="form-group col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <label htmlFor ="password">Password</label>
                <input type="text"
                       id="password"
                       name="password" 
                       placeholder="password"
                ></input>
                </div>
                <div className="form-group col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <button className="btn btn-success"
                type="submit"
                onClick={formSubmit}
                >Login</button>
                </div>
                </form>
                </div>
            </div>
        )
    
}

export default Login
