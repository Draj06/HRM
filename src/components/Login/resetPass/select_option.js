import React, {useContext, useState } from 'react'
import '../../../Styles/loginStyle.css'
import LoginSide from '../../../Images/login_side.png'
import Logingeaderimg from '../../../Images/Company_logo.png'
import { useForm } from "react-hook-form";

const Select_option = (props) => {
    const { register, handleSubmit, reset, errors } = useForm();
    const [circleloading,setcircleloading] = useState(false)
    const [disabled, setdisabled] = useState(false);
    const[input_style,set_input_style] =useState("ideal_empty_input")
    const[label_style,set_label_style] =useState("ideal_label_on_empty_input")
    const [show_input_phone,set_show_input_phone] = useState(false)
    const [show_input_email,set_show_input_email] = useState(false)

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

const check_option=(e)=>{
    let checked = e.target.checked;
    let name = e.target.name
    
    console.log(e.target.name)
    if(name==="phone_No"){
     set_show_input_phone(true)
    }
}


  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
            <img src={LoginSide} className="loginSideImg" />
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="img_heading">
                    <div>
                      <img src={Logingeaderimg} className="loginHeader" />
                    </div>
                    <span className="welcome_back_login">
                      Reset your password to continue.
                    </span>
                  </div>
                  <div className="col-md-9 col-lg-8 form_login">
                    <h3 className="login_heading mt-2">Forget password ?</h3>
                    <hr></hr>
                    <form>
                      <div className="reset_pass_option">
                      <div
                          className="custom-control custom-checkbox "
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="phone_No"
                            name="phone_No"
                            onChange={check_option}
                            
                          />
                          <label
                            className="custom-control-label text-capitalize"
                            htmlFor="phone_No"
                          >
                            Phone number
                          </label>
                        </div>
                        <div
                          className="custom-control custom-checkbox "
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="email_opt"
                            name="email_opt"
                            onChange={check_option}
                            
                          />
                          <label
                            className="custom-control-label text-capitalize"
                            htmlFor="email_opt"
                          >
                            Email address
                          </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="tel"
                            name="phone_no"
                            id="phone_no"
                            ref={register({ required: true })}
                            className={errors.phone_no ? "inputColorLine" : input_style}
                            placeholder="phone No"
                            
                            onBlur={lossFocus}
                            />
                            {errors.phone_no && (
                                <div><span className="inputTextError">phone_no is required</span></div>
                                )}
                                <label htmlFor="phone_no" className={errors.phone_no ? "inputColorLine input_label_on_error" : label_style}
                            >Enter your phone number here</label>
                        </div>
                        <div className="form-group">
                            <input type="email"
                            name="emaill_add"
                            id="emaill_add"
                            ref={register({ required: true })}
                            className={errors.emaill_add ? "inputColorLine" : input_style}
                            placeholder="Email address"
                            
                            onBlur={lossFocus}
                            />
                            {errors.phone_no && (
                                <div><span className="inputTextError">Email is required</span></div>
                                )}
                                <label htmlFor="emaill_add" className={errors.emaill_add ? "inputColorLine input_label_on_error" : label_style}
                            >Enter your email address here</label>
                        </div>
                        <div>
                        <button
                          className="btn primaryDarkColor"
                          type="submit"
                          disabled={disabled}
                        >
                          {circleloading && (
                            <span className="spinner-border float-right"></span>
                          )}
                          Send Otp
                        </button>
                        <button
                        className="btn white_color_btn"
                        type="button"
                        onClick={props.trigger_go_back}
                        >
                            Cancel
                        </button>
                      </div>
                      </div>
                      
                      <br></br>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select_option;
