import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Jwt_Decode from "jwt-decode";

export const  AuthRoute=({component:Component, ...rest}) => {
  
   const token = localStorage.getItem('JWT_Token') 
  

    return (
       <Route {...rest} render={
         (props => {
           if(token)
           {

             return <Component {...props}/>
           }
           else{
             return <Redirect to={{
               pathname:"/",
               state:{
                 from:props.location
               }
             }} />
           }
         })
       }/>
    )
}


