import React, { useState } from 'react'
import LoginComp from '../../components/Login/loginComponent'
import Select_rec_option from '../../components/Login/resetPass/select_option'



const Login =() =>{
    const [emailClick,setemailClick] = useState(false)
    const [PassState,setPassState] = useState(false)
    const checkEmail =()=>{
        setemailClick(true)
    
    }
    const goBack=()=>{
        setemailClick(false)
        
    }
  
        return (
            <div className="container-fluid">
                {emailClick === false && <LoginComp trigerOnClickPassForget={checkEmail}/>}
                {emailClick === true && <Select_rec_option trigger_go_back={goBack}/>}
                
            </div>

        )
    
}

export default Login
