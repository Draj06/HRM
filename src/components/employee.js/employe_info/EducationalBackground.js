import React from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_EDUCATION } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";

const EducationalBackground=(props)=> {

    let type = props.type;
    let id = localStorage.getItem("emp_Id");
    const { error, loading, data } = useQuery(GET_EMP_EDUCATION, {
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

    let empData = data.getEmployeeEducationInfo
    console.log(empData)
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
            id="emp_qualification"
            value={item.Employee_qualification}
          />
          <br />
          <label htmlFor="emp_qualification" className="labelEmploye">
            Qualification
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_specification"
            value={item.Employee_specification}
          />
          <br />
          <label htmlFor="emp_specification" className="labelEmploye">
           Specification
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="institute_name"
            value={item.Institute_name}
          />
          <br />
          <label htmlFor="institute_name" className="labelEmploye">
            Institute name
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
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="cgps"
            value={item.CGPA}
          />
          <br />
          <label htmlFor="cgpa" className="labelEmploye">
            CGPA
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="percentage"
            value={item.Percentage}
          />
          <br />
          <label htmlFor="percentage" className="labelEmploye">
            Percentage
          </label>
        </div>
        
        </div> 
        <hr /> 
         </div>
         ))}
             
        </div>
    )
}

export default EducationalBackground
