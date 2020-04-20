import React from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_ID } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
const Id =(props)=> {
    let type = props.type;
    let id = localStorage.getItem("emp_Id");
    const { error, loading, data } = useQuery(GET_EMP_ID, {
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

  
  let empData = data.getEmployeeIdProofInfo
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
            id="pan_no"
            value={(empData.Employee_pan)}
          />
          <br />
          <label htmlFor="pan_no" className="labelEmploye">
            PAN Number
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_uan"
            value={empData.Emploeyee_UAN}
          />
          <br />
          <label htmlFor="emp_uan" className="labelEmploye">
            UAN
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_designation"
            value={empData.Employee_PF_number}
          />
          <br />
          <label htmlFor="emp_designation" className="labelEmploye">
          PF Number
          </label>
        </div>
        
    </div>
    <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="esi_no"
            value={empData.Employee_ESI_no}
          />
          <br />
          <label htmlFor="esi_no" className="labelEmploye">
            ESI Number
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_adhar"
            value={empData.Employee_Aadhar_number}
          />
          <br />
          <label htmlFor="emp_adhar" className="labelEmploye">
            Adhar Number
          </label>
        </div>
        </div>

        <hr />


        <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="emp_passport_no"
            value={empData.Employee_passport_number}
          />
          <br />
          <label htmlFor="emp_passport_no" className="labelEmploye">
            Passport Number
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="pasport_Validity"
            value={empData.Employee_passport_validity}
          />
          <br />
          <label htmlFor="pasport_Validity" className="labelEmploye">
            Passport validity
          </label>
        </div>
        </div>




        </div>
    )
}
export default Id
