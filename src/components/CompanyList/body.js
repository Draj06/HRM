import React,{useState} from 'react'
import ProfilePic from "../../Images/Company_logo.png";
import {Fade} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../../Styles/company.css'

const Body=()=> {
    const [open, setOpen] = useState(null);
    const [input_style, set_input_style] = useState("ideal_empty_input");
    const [label_style, set_label_style] = useState("ideal_label_on_empty_input");
    const [disabled, setdisabled] = useState(true);
    const data = [
        {
          "Company_name": "Royal enfeild",
          "Industry": "Motor_Bikes",
          "Company_Address": "2nd Floor No. 7M, 211, 80 Feet Rd, opp. Urban Ladder, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
          "Pin_code": "560045",
          "City": "Bangalore",
          "State": "haryana",
          "Country": "India",
          "official_email": "dheeraj@gmail.com",
          "official_phon_no": "81268125643",
          "website": "https://www.royalenfield.com/"
        },
        {
          "Company_name": "Wiznet",
          "Industry": "Semiconductors",
          "Company_Address": "2nd Floor No. 7M, 211, 80 Feet Rd, opp. Urban Ladder, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
          "Pin_code": "560045",
          "City": "Bangalore",
          "State": "Karnataka",
          "Country": "India",
          "official_email": "irayya@gmail.com",
          "official_phon_no": "8178458185",
          "website": "https://www.wiznet.io/"
        },
        {
          "Company_name": "TCS",
          "Industry": "Technology",
          "Company_Address": "2nd Floor No. 7M, 211, 80 Feet Rd, opp. Urban Ladder, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
          "Pin_code": "560045",
          "City": "Bangalore",
          "State": "Karnataka",
          "Country": "India",
          "official_email": "tcs@gmail.com",
          "official_phon_no": "8178458185",
          "website": "https://www.wiznet.io/"
        }
      ]
      const onInputFocus = () => {
        set_input_style("on_focus_input_style");
        set_label_style("on_focus_input_label_style");
      };
      const lossFocus = (e) => {
        const v = e.target.value;
        console.log(v);
        if (v !== "") {
          set_input_style("on_loss_focus_input_style");
          set_label_style("on_loss_focus_input_label_style");
        }
      };
    return (
        <div className="container-fluid companyContainer fix_header_company">
            {data.map((item, index) => (
                <div className="company_list_view_div container-fluid myCollapse mt-3">
                    <div className="row div_parent">
                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 form-group">
                 <div className="row">
                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                     <img
                          src={ProfilePic}
                          className="companyImage"
                          alt="Image"
                        ></img>
                     </div>
                     <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3">
                         <h5 className="companyName">{item.Company_name}</h5>
                         <a href={item.website} className="company_website">website</a>
                        
                     </div>
                 </div>
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 align-self-center mx-auto" align="center">
                    
                     <Link className="btn dash_Prof_button mr-3"
                     to="dashboard"
                    >View Dashboard</Link>
                     <button 
                     className="btn dash_Prof_button mr-4"
                     onClick={() => setOpen(open === index ? null : index)}
                    aria-controls={index}
                    aria-expanded={open === index ? true : false}
                     
                     >
                         View Profile</button>
                     
                </div>
                </div>

                <Fade in={open === index ? true : false}>
              <div id={index} className="mt-3 container-fluid ">
               <div className="row">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                   <input
                     type="text"
                     id="company_name"
                     name="company_name"
                     disabled={disabled}
                     value={item.Company_name}
                     
                      onBlur={lossFocus}
                      className="input_style_on_disabled"
                  
                   />
                   <br />
                   <label htmlFor="company_name" className="input_label_style_on_disabled">
                     Company Name
                   </label>
                 </div>
                 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                   <input
                     type="text"
                     id="industry"
                     name="industry"
                     disabled={disabled}
                     value={item.Industry}
                     
                      onBlur={lossFocus}
                      className="input_style_on_disabled"
                   />
                   <br />
                   <label htmlFor="industry" className="input_label_style_on_disabled">
                     Industry
                   </label>
                 </div>
               </div>
           
               <div className="row">
                 <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 form-group">
                   <input
                     type="text"
                     id="company_address"
                     name="company_address"
                     disabled={disabled}
                     value={item.Company_Address}
                     
                      onBlur={lossFocus}
                      className="input_style_on_disabled"
                   />
                   <br />
                   <label htmlFor="company_address" className="input_label_style_on_disabled">
                     Company Address
                   </label>
                 </div>
                 <div className="col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 form-group">
                   <input type="text" id="pin" 
                   name="pin" disabled={disabled} 
                   value={item.Pin_code} 
                   
                    onBlur={lossFocus}
                    className="input_style_on_disabled"
                   />
                   <br />
                   <label htmlFor="industry" className="input_label_style_on_disabled">
                     Pin Code
                   </label>
                 </div>
               </div>
               <div className="row">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                   <input
                     type="text"
                     id="city"
                     name="city"
                     disabled={disabled}
                     value={item.City}
                     
                      onBlur={lossFocus}
                      className="input_style_on_disabled"
                   />
                   <br />
                   <label htmlFor="city" className="input_label_style_on_disabled">
                     City
                   </label>
                 </div>
                 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                   <input
                     type="text"
                     id="state"
                     name="state"
                     disabled={disabled}
                     value={item.State}
                     
                      onBlur={lossFocus}
                      className="input_style_on_disabled"
                   />
                   <br />
                   <label htmlFor="state" className="input_label_style_on_disabled">
                     State
                   </label>
                 </div>
                 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                   <input
                     type="text"
                     id="Country"
                     name="Country"
                     disabled={disabled}
                     value={item.Country}
                     
                      onBlur={lossFocus}
                      className="input_style_on_disabled"
                   />
                   <br />
                   <label htmlFor="Country" className="input_label_style_on_disabled">
                     Country
                   </label>
                 </div>
               </div>
           
               <div className="row">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                   <input
                     type="text"
                     id="official_emal_add"
                     name="official_emal_add"
                     disabled={disabled}
                     value={item.official_email}
                     
                      onBlur={lossFocus}
                      className="input_style_on_disabled"
                   />
                   <br />
                   <label htmlFor="official_emal_add" className="input_label_style_on_disabled">
                     Official email address
                   </label>
                 </div>
                 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                   <input
                     type="text"
                     id="official_phone_no"
                     name="official_phone_no"
                     disabled={disabled}
                     value={item.official_phon_no}
                     
                      onBlur={lossFocus}
                      className="input_style_on_disabled"
                   />
                   <br />
                   <label htmlFor="official_phone_no" className="input_label_style_on_disabled">
                     Official phone number
                   </label>
                 </div>
                 <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group mt-3">
                   <a href={item.website}>
                     Company website
                   </a>
                 </div>
               </div>
             </div>
           </Fade>






            </div>
            ))}
            
            

        </div>
    )
}

export default Body
