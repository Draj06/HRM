import React from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_PROF_BACKGROUND } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";

const Proffbackground=(props)=> {

    let type = props.type;
    let id = localStorage.getItem("emp_Id");
    const { error, loading, data } = useQuery(GET_EMP_PROF_BACKGROUND, {
      variables: { type, id },
    });
 
    if (loading)
    return (
      <Loader
        className="loaderCLassForGraph"
        type="ThreeDots"
        color="#0073e6"
      />
    );

  if (error)
    return (
      <div className="alert alert-danger alert-dismissible">
        <button type="button" className="close" data-dismiss="alert"></button>
        <div align="center">
          <strong>{error.message}</strong>{" "}
        </div>
      </div>
    );

    let empData = data.getEmployeeProfessionalInfo
    if(empData===null)
     return(

    <div className="alert alert-danger alert-dismissible">
        <button type="button" className="close" data-dismiss="alert"></button>
        <div align="center">
          <strong>Ooopppsss !!! No data</strong>{" "}
        </div>
      </div>
     )
    return (
        <div className="container-fluid"> 
        {empData.map(item=>(
          <div>
        <div className="row"> 
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_company_Name"
            value={item.Name_of_the_company}
          />
          <br />
          <label htmlFor="emp_qualification" className="labelEmploye">
            Name of the company
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_designation"
            value={item.Designation}
          />
          <br />
          <label htmlFor="emp_designation" className="labelEmploye">
          Designation
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="company_location"
            value={item.Company_location}
          />
          <br />
          <label htmlFor="Company_location" className="labelEmploye">
            Company location
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="start_date"
            value={item.Start_date}
          />
          <br />
          <label htmlFor="start_date" className="labelEmploye">
            Start date
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="end_date"
            value={item.End_date}
          />
          <br />
          <label htmlFor="end_date" className="labelEmploye">
            End date
          </label>
        </div>
        </div>  
        <hr /> 
        </div>
        ))}
             
        </div>
    )
}

export default Proffbackground
