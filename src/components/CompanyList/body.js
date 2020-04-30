import React,{useState} from 'react'
import ProfilePic from "../../Images/profile.png";
import {Fade} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../../Styles/company.css'

const Body=()=> {
    const [open, setOpen] = useState(false);
    return (
        <div className="container-fluid companyContainer">
            <div className="row emp_sideLeft">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <div className="row">
                     <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <img
                          src={ProfilePic}
                          className="companyImage"
                          alt="Image"
                        ></img>
                     </div>
                     <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-4" >
                         <h5 className="companyName">Company Name</h5>
                         <a href="www.google.com">Website</a>
                         <div className="mt-3">
                             <div className="phoneNo">
                                 <span>8126815643</span><br/>
                                 <span>8178458185</span>
                             </div>
                         </div>
                     </div>
                 </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 align-self-center mx-auto" align="center">
                    
                     <Link className="btn dash_Prof_button mr-3"
                     to="dashboard"
                    >View Dashboard</Link>
                     <button 
                     className="btn dash_Prof_button mr-4"
                     onClick={() => setOpen(!open)}
                     aria-controls="company1"
                     aria-expanded={open}
                     
                     >
                         View Profile</button>
                     <i className="fas fa-edit fa-2x"></i>
                </div>
                
            </div>
                    <Fade in={open}>
                <div id="company1" className="mt-5">
                <div className="row">
                     <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                     <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        disabled={true}
                        value="Royal Enfield"
                    />
                    <br />
                    <label htmlFor="company_name" className="labelEmploye">
                        Company Name
                    </label>
                     </div>
                     <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                     <input
                        type="text"
                        id="industry"
                        name="industry"
                        disabled={true}
                        value="Veichels"
                    />
                    <br />
                    <label htmlFor="industry" className="labelEmploye">
                        Industry Name
                    </label>
                     </div>
                </div>


                <div className="row">
                     <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 form-group">
                     <input
                        type="text"
                        id="company_address"
                        name="company_address"
                        disabled={true}
                        value="2nd Floor No. 7M, 211, 80 Feet Rd, opp. Urban Ladder, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043"
                    />
                    <br />
                    <label htmlFor="company_address" className="labelEmploye">
                        Company Address
                    </label>
                     </div>
                     <div className="col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 form-group">
                     <input
                        type="text"
                        id="pin"
                        name="pin"
                        disabled={true}
                        value="560045"
                    />
                    <br />
                    <label htmlFor="industry" className="labelEmploye">
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
                        disabled={true}
                        value="Bangalore"
                    />
                    <br />
                    <label htmlFor="city" className="labelEmploye">
                        City
                    </label>
                     </div>
                     <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                     <input
                        type="text"
                        id="state"
                        name="state"
                        disabled={true}
                        value="karnataka"
                    />
                    <br />
                    <label htmlFor="state" className="labelEmploye">
                        State
                    </label>
                     </div>
                     <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                     <input
                        type="text"
                        id="Country"
                        name="Country"
                        disabled={true}
                        value="India"
                    />
                    <br />
                    <label htmlFor="Country" className="labelEmploye">
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
                        disabled={true}
                        value="Bangalore"
                    />
                    <br />
                    <label htmlFor="official_emal_add" className="labelEmploye">
                        Official email address
                    </label>
                     </div>
                     <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group">
                     <input
                        type="text"
                        id="official_phone_no"
                        name="official_phone_no"
                        disabled={true}
                        value="karnataka"
                    />
                    <br />
                    <label htmlFor="official_phone_no" className="labelEmploye">
                        Official phone number
                    </label>
                     </div>
                     <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 form-group mt-3">
                     <a href="https://www.google.com/search?client=firefox-b-d&q=googlr">Company website</a>
                    
                     </div>
                     </div>


                </div>
            </Fade>
        </div>
    )
}

export default Body
