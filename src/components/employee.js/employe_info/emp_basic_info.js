import React from "react";
import Loader from "react-loader-spinner";
import { GET_EMP_BASIC_INFO } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
import ProfilePic from "../../../Images/profile.png";

const Employee_basic_Info = (props) => {
  let type = props.type;
  let id = localStorage.getItem("emp_Id");
  const { error, loading, data } = useQuery(GET_EMP_BASIC_INFO, {
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
  const empData = data.getEmpBasicInfo;
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
    <div className="container-fluid emp_sideLeft">
      <div className="row ">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <img src={ProfilePic} alt="Profile pic" className="userPicEmploye" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div className="form-group">
            <input
              type="text"
              className="text-capitalize"
              disabled
              id="emp_name"
              value={empData.Employee_Name}
            />
            <br />
            <label htmlFor="emp_name" className="labelEmploye">
              Name
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="text-capitalize"
              disabled
              id="Blood_group"
              value={empData.Blood_Group}
            />
            <br />
            <label htmlFor="Blood_group" className="labelEmploye">
              Blood Group
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="text-capitalize"
              disabled
              id="marital_status"
              value={empData.Marital_status}
            />
            <br />
            <label htmlFor="marital_status" className="labelEmploye">
              Marital Status
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="text-capitalize"
              disabled
              id="nationality"
              value={empData.Employee_Nationality}
            />
            <br />
            <label htmlFor="nationality" className="labelEmploye">
              Nationality
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="text-capitalize"
              disabled
              id="religion"
              value={empData.Religion}
            />
            <br />
            <label htmlFor="religion" className="labelEmploye">
              Religion
            </label>
          </div>
        </div>

        {/* ----------------------------------------------- */}

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div className="form-group">
            <input
              type="text"
              disabled
              id="emp_no"
              value={empData.Empployee_Number}
            />
            <br />
            <label htmlFor="emp_no" className="labelEmploye">
              Employee Number
            </label>
          </div>
          <div className="form-group">
            <input type="text" disabled id="gender" value={empData.Gender} />
            <br />
            <label htmlFor="gender" className="labelEmploye">
              Gender
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              disabled
              id="Residential_status"
              value={empData.Residential_status}
            />
            <br />
            <label htmlFor="Residential_status" className="labelEmploye">
              Residential Status
            </label>
          </div>
          <div className="form-group">
            <input type="text" disabled id="dob" value={empData.DOB} />
            <br />
            <label htmlFor="dob" className="labelEmploye">
              DOB
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="tdoj"
            value={empData.Tentative_date_of_joining}
          />
          <br />
          <label htmlFor="tdoj" className="labelEmploye">
            Tentative date of joining
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="doj"
            value={empData.Date_of_joining}
          />
          <br />
          <label htmlFor="doj" className="labelEmploye">
            Date of joining
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="probation_period"
            value={empData.Probation_period_in_days}
          />
          <br />
          <label htmlFor="probation_period" className="labelEmploye">
            Probation Period
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="confermation_date"
            value={empData.confiramation_date}
          />
          <br />
          <label htmlFor="confermation_date" className="labelEmploye">
            Confermation Date
          </label>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="personal_mob_no"
            value={empData.Employee_personal_mobile_number}
          />
          <br />
          <label htmlFor="personal_mob_no" className="labelEmploye">
            Personal mobile No.
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="personal_email"
            value={empData.Employee_personal_email_ID}
          />
          <br />
          <label htmlFor="personal_email" className="labelEmploye">
            Personal email
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="official_email"
            value={empData.Employee_official_emil_ID}
          />
          <br />
          <label htmlFor="official_email" className="labelEmploye">
            Official email
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="official_mob_no"
            value={empData.Employee_official_mobile_number}
          />
          <br />
          <label htmlFor="official_mob_no" className="labelEmploye">
            official mobile No.
          </label>
        </div>
    </div>
    {/* --------------------------------------fatehwr info-------------------------------- */}

    <hr/>
    <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="fathers_name"
            value={empData.Employee_father_name}
          />
          <br />
          <label htmlFor="fathers_name" className="labelEmploye">
            Father's Name
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="spouse_name"
            value={empData.Employee_spouse_name}
          />
          <br />
          <label htmlFor="spouse_name" className="labelEmploye">
            Spouse name
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="emergency_contact_no"
            value={empData.Employee_emergency_contact_number}
          />
          <br />
          <label htmlFor="emergency_contact_no" className="labelEmploye">
            Emergency contact No.
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="emergency_name"
            value={empData.Employee_emergency_contact_name}
          />
          <br />
          <label htmlFor="emergency_name" className="labelEmploye">
            Emergency contact name
          </label>
        </div>
             </div>
             <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="emergency_name_relation"
            value={empData.Employee_emergency_contact_relation}
          />
          <br />
          <label htmlFor="emergency_name_relation" className="labelEmploye">
            Emergency contact relation
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-10 col-lg-9 col-xl-9">
          <input
            type="text"
            disabled
            id="emergency_name_relation_address"
            value={empData.Employee_emergency_contat_address}
          />
          <br />
          <label htmlFor="emergency_name_relation_address" className="labelEmploye">
            Emergency contact address
          </label>
        </div>
    </div>


    {/* ======================================   residence  ====================================== */}

    <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-9 col-xl-9">
          <input
            type="text"
            disabled
            id="residence_address"
            value={empData.Employee_resident_address}
          />
          <br />
          <label htmlFor="residence_address" className="labelEmploye">
            Residencde address
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-10 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="residance_pin"
            value={empData.Employee_resident_PIN}
          />
          <br />
          <label htmlFor="residance_pin" className="labelEmploye">
           Residence Pin Code
          </label>
        </div>
    </div>




    <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-9 col-xl-9">
          <input
            type="text"
            disabled
            id="permanent_address"
            value={empData.Employee_permanent_address}
          />
          <br />
          <label htmlFor="permanent_address" className="labelEmploye">
            Permanent address
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-10 col-lg-3 col-xl-3">
          <input
            type="text"
            disabled
            id="permanent_pin"
            value={empData.Employee_permanent_PIN}
          />
          <br />
          <label htmlFor="permanent_pin" className="labelEmploye">
           Permanant Pin 
          </label>
        </div>
    </div>


    </div>
  );
};
export default Employee_basic_Info;
