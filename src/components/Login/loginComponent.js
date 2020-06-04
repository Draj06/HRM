import React, {useContext, useState } from 'react'
import '../../Styles/loginStyle.css'
import { useHistory} from "react-router-dom";
import LoginSide from '../../Images/login_side.png'
import Logingeaderimg from '../../Images/Company_logo.png'
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_MUTATION } from "../../mutations";
import { ToastContainer, toast } from 'react-toastify';


import {AuthContext} from '../../Context/contextAuth'

const LoginComp =(props) =>{
    const context = useContext(AuthContext)
    const { register, handleSubmit, reset, errors } = useForm();
    const [circleloading,setcircleloading] = useState(false)
    const [disabled, setdisabled] = useState(false);
    const[input_style,set_input_style] =useState("ideal_empty_input")
    const[label_style,set_label_style] =useState("ideal_label_on_empty_input")
    
    const history = useHistory();

    const [loginFun] = useMutation(LOGIN_MUTATION,{
        update(_,{data:{userLogin:userData}}){
            
             context.login(userData)
           history.push("/dashboard");
            
          }
    })

    const onSubmit = async (e) => {
        setcircleloading(true)
        setdisabled(true)
        let {email,password} = e
        console.log(e)
        try{
    
            await loginFun({variables: {email,password}})
            setcircleloading(false)
            setdisabled(false)
            
        }
        catch(err){
          setcircleloading(false)   
          setdisabled(false)
          
          console.log(err)
            let error = err.graphQLErrors[0].message
             toast.error( error, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
              });
          
        }
        
      };
      const onInputFocus=()=>{
        set_input_style("on_focus_input_style")
        set_label_style("on_focus_input_label_style")
      }
      const lossFocus=(e)=>{
    
        const v = (e.target.value)
        
        if(v!==""){
           set_input_style("on_loss_focus_input_style")
          set_label_style("on_loss_focus_input_label_style")
        }
      }
      
        return (
            <div className="container-fluid">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    />
     <ToastContainer />
                   

     <div class="container-fluid">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
    <img src={LoginSide} className="loginSideImg"/>
    </div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container-fluid">
          <div class="row">
          <div className="img_heading">
                <div>
                <img src={Logingeaderimg} className="loginHeader"/>
                </div>
                    <span className="welcome_back_login">Welcome back! Please login to your account.</span>
                </div>
            <div class="col-md-9 col-lg-8 form_login">
             
              <h3 class="login_heading mt-2">Sign in</h3>
              <hr></hr>
              <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="reset_pass_option">
                                <div className="form-group">
                                
                                    <input
                                    name="email"  
                                    type="email" placeholder="Email address"
                                    autofocus
                                    ref={register({ required: true })}
                                    
                                    onBlur={lossFocus}
                                    className={errors.email ? "inputColorLine" : input_style}
                                    
                                    />
                                     {errors.email && (
                                         <div><span className="inputTextError">Email is required</span></div>
                                         )}
                                   <label htmlFor="email" className={errors.email ? "inputColorLine input_label_on_error" : label_style}
                                        >Enter your email here</label>
                                 </div>
                                <div className="form-group">
                                    <input
                                     id="password" name="password"
                                      type="password" placeholder="Password"
                                      ref={register({ required: true })}
                                      
                                      onBlur={lossFocus}
                                      className={errors.password ? "inputColorLine" : input_style}
                                      />
                                       {errors.password && (
                                           <div><span className="inputTextError">password is required</span></div>
                                           )}
                                           <label htmlFor="password" className={errors.password ? "inputColorLine input_label_on_error" : label_style}
                                        >Enter your password here</label>
                                </div>
                            <div>
                            <p 
                                onClick={props.trigerOnClickPassForget}
                                className="forgetPass text-right"
                                >Forget password ?</p>
                            </div>
                            <div>
                            <button className="btn primaryDarkColor"
                            type="submit"
                            disabled={disabled}
                                >
                                    
                               Sing in
                               {circleloading && (
                                    <span className="spinner-border float-right"></span>
                                )}
                            </button>
                            </div>
                            <span className="terms_and_cond">
                            By clicking the "Sign in" you agree to Duruper's <u>term and conditions <br /> </u> 
                                    and  <u>privacy policy</u>
                            </span>
                            <br></br>
                            <br></br>
                           </div>
                                
                            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

 )
    
}

export default LoginComp
