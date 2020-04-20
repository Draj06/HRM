import React from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_SALARY } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
const Salary =(props)=> {
    let type = props.type;
    let id = localStorage.getItem("emp_Id");
    const { error, loading, data } = useQuery(GET_EMP_SALARY, {
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

  
  let empData = data.getEmployeeSalaryCtc
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
            <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_designation"
            value={(empData.Employee_monthly_current_cost_to_company).toLocaleString('en-IN')}
          />
          <br />
          <label for="emp_designation" className="labelEmploye">
            Salary
          </label>
        </div>
        
    </div>
        </div>
    )
}
export default Salary
