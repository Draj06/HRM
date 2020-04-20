import React from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_BANK_DETAILS } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
const Bank =(props)=> {
    let type = props.type;
    let id = localStorage.getItem("emp_Id");
    const { error, loading, data } = useQuery(GET_EMP_BANK_DETAILS, {
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

  
  let empData = data.getEmployeeBankInfo
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
            id="bank_name"
            value={empData.Employee_Bank}
          />
          <br />
          <label htmlFor="bank_name" className="labelEmploye">
            Bank's name
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="bank_branch"
            value={empData.Employee_bank_branch}
          />
          <br />
          <label htmlFor="bank_branch" className="labelEmploye">
            Bank's branch
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="bank_account_no"
            value={empData.Employee_bank_account_number}
          />
          <br />
          <label htmlFor="bank_account_no" className="labelEmploye">
          Bank's account number
          </label>
        </div>
        
    </div>
    </div>
    )
}
export default Bank
