import React from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_EXIT_STATUS } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
const ExitInfo =(props)=> {
    let type = props.type;
    let id = localStorage.getItem("emp_Id");
    const { error, loading, data } = useQuery(GET_EMP_EXIT_STATUS, {
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

  
  let empData = data.getEmployeeExitInfo
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
            id="tdoe"
            value={empData.Employee_tentative_date_of_exit}
          />
          <br />
          <label htmlFor="bank_name" className="labelEmploye">
            Tentative date of exit
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="doe"
            value={empData.Employee_date_of_exit}
          />
          <br />
          <label htmlFor="doe" className="labelEmploye">
            Bank's branch
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="Emp_exit_reason"
            value={empData.Emp_exit_reason}
          />
          <br />
          <label htmlFor="Emp_exit_reason" className="labelEmploye">
             Exit reson
          </label>
        </div>
        
    </div>
    </div>
    )
}
export default ExitInfo
