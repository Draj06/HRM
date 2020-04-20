import React from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_POSITION } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
const Employee_Position =(props)=> {
    let type = props.type;
    let id = localStorage.getItem("emp_Id");
    const { error, loading, data } = useQuery(GET_EMP_POSITION, {
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

  
  let empData = data.getEmployeePositionDept
    if(data.getEmployeePositionDept===null)
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
            <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_designation"
            value={empData.Employee_designation}
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
            id="emp_depart"
            value={empData.Employee_department}
          />
          <br />
          <label htmlFor="emp_depart" className="labelEmploye">
            Department
          </label>  
        </div>
        
    </div>
        </div>
    )
}
export default Employee_Position
