import React,{useState,useEffect} from "react";
import Loader from "react-loader-spinner";
import { GET_EMP_BASIC_INFO } from "../../../queries";
import { GET_EMPLOYEE_DATA,GET_ALL_EMP_STATUS_COUNT } from "../../../queries";
import {SET_EMPLOYEE_STATUS} from '../../../mutations'
import { useQuery,useMutation } from "@apollo/react-hooks";
import ProfilePic from "../../../Images/profile.png";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import test from "../../../Test.json";

const Employe_basic_info_backedOff = (props) => {
  let type = props.type || "BasicInfo";
  let id = localStorage.getItem("emp_Id");
  let emp_status = localStorage.getItem("status_for_toggle");
 
  const [disabled, setdisabled] = useState(true);
  const { register, handleSubmit,reset, errors } = useForm();
  const [circleloading,setcircleloading] = useState(false)
  const[cancelData,setCancelData] = useState({})
  const [showsave, setshowsave] = useState(false);
  const [formData, setFormData] = useState({});
  



  const {error, loading, data} = useQuery(GET_EMP_BASIC_INFO, {
    variables: { type, id },
  });
  const [updateEmployeeSectionEmployeeBasicInfoStatus] = useMutation(SET_EMPLOYEE_STATUS,{
    refetchQueries: [
      {
        
        query: GET_EMPLOYEE_DATA,
        variables: { status:emp_status}
      },
      {
        query:GET_ALL_EMP_STATUS_COUNT
      }
    ]
  });

  useEffect(() => {
    if(data)
    {

      setFormData(data.getEmpBasicInfo);
      setCancelData(data.getEmpBasicInfo);
    } 
    }, [data])

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


  const edit = () => {
    setdisabled(false);
    setshowsave(true);
  };

  const onSubmit = (e) => {
    console.log(e)
    setcircleloading(true)
    setdisabled(true)
    }

    const handleChange = e => {
      const name = e.target.name;
      const value = e.target.value;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
    const cancel=()=>{
      setdisabled(true);
      setshowsave(false);
      setFormData(cancelData)
      reset();
    }


    if(empData===null || empData==="" || empData.length===0)
    return(

   <div className="alert alert-warning alert-dismissible">
       <button type="button" className="close" data-dismiss="alert"></button>
       <div align="center">
         <strong>Ooopppsss !!! No data</strong>{" "}
       </div>
     </div>
    )
     const backedOftoggle =(e)=>{
      let checked = e.target.checked;
      if(checked===true){
       
        let status ="yes"
        
      updateEmployeeSectionEmployeeBasicInfoStatus({
        variables: { id, status },
      });
      toast.success( 'Status updated', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
    }
    else if (checked===false){
      let status = "no"
      
      updateEmployeeSectionEmployeeBasicInfoStatus({
      variables: { id, status },
    });
    toast.success( 'Status updated', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
      });
    }
     }
  return (
    <div className="container-fluid">
      
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
/>
      <form onSubmit={handleSubmit(onSubmit)}>
      {test.userType==="admin" && showsave===false && 
        <div align="right">
        <button className="btn white_color_btn" 
        type="button"
        onClick={edit}>
          Edit
        </button>
      </div>}
      {showsave===true &&  
      <div align="right">
        <button className="btn white_color_btn mr-1" 
        type="button"
        onClick={cancel}
        > 
          Cancel
        </button>
      <button className="btn primaryDarkColor" 
        type="submit"
        disabled={disabled}
        > 
        {circleloading && (
            <span class="spinner-border float-left"></span>
          )}
          Save
        </button>
        </div>
        }
      <div className="emp_sideLeft">
        
      <div className="row mt-2">
      
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
          <img src={ProfilePic} alt="Profile pic" className="userPicEmploye" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div className="form-group">
            <input
              type="text"
              className="text-capitalize"
              id="Employee_Name"
              name="Employee_Name"
              onChange={handleChange}
              value={formData.Employee_Name}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_Name && (
              <div><span className="text-danger">name is required</span></div>
            )}
            <label htmlFor="Employee_Name" className="labelEmploye">
              Name
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="text-capitalize"
              id="Blood_Group"
              name="Blood_Group"
              onChange={handleChange}
              value={formData.Blood_Group}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Blood_Group && (
              <div><span className="text-danger">Blood group is required</span></div>
            )}
            <label htmlFor="Blood_Group" className="labelEmploye">
              Blood Group
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="text-capitalize"
              id="Marital_status"
              name="Marital_status"
              onChange={handleChange}
              value={formData.Marital_status}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Marital_status && (
              <div><span className="text-danger">Marital status is required</span></div>
            )}
            <label htmlFor="marital_status" className="labelEmploye">
              Marital Status
            </label>
          </div>
          
        </div>

        {/* ----------------------------------------------- */}

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div className="form-group">
            <input
              type="text"
              id="Empployee_Number"
              name="Empployee_Number"
              onChange={handleChange}
              value={formData.Empployee_Number}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Empployee_Number && (
              <div><span className="text-danger">Employee no. is required</span></div>
            )}
            <label htmlFor="Empployee_Number" className="labelEmploye">
              Employee Number
            </label>
          </div>
          <div className="form-group">
            <input 
            type="text" 
              id="Gender"
              name="Gender"
              onChange={handleChange}
              value={formData.Gender}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Gender && (
              <div><span className="text-danger">Gender is required</span></div>
            )}
            <label htmlFor="Gender" className="labelEmploye">
              Gender
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="Residential_status"
              name="Residential_status"
              onChange={handleChange}
              value={formData.Residential_status}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Residential_status && (
              <div><span className="text-danger">Residential status is required</span></div>
            )}
            <label htmlFor="Residential_status" className="labelEmploye">
              Residential Status
            </label>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="form-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <input
              type="text"
              className="text-capitalize"
              id="Employee_Nationality"
              name="Employee_Nationality"
              onChange={handleChange}
              value={formData.Employee_Nationality}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_Nationality && (
              <div><span className="text-danger">Nationality is required</span></div>
            )}
            <label htmlFor="Employee_Nationality" className="labelEmploye">
              Nationality
            </label>
          </div>
          <div className="form-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <input
              type="text"
              className="text-capitalize"
              id="Religion"
              name="Religion"
              onChange={handleChange}
              value={formData.Religion}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Religion && (
              <div><span className="text-danger">Religion is required</span></div>
            )}
            <label htmlFor="Religion" className="labelEmploye">
              Religion
            </label>
          </div>
	       <div className="form-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <input 
            type="text" 
            id="DOB"
              name="DOB"
              onChange={handleChange}
              value={formData.DOB}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.DOB && (
              <div><span className="text-danger">DOB is required</span></div>
            )}
            <label htmlFor="DOB" className="labelEmploye">
              DOB
            </label>
          </div>
      </div>
      <hr />
      <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Tentative_date_of_joining"
              name="Tentative_date_of_joining"
              onChange={handleChange}
              value={formData.Tentative_date_of_joining}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Tentative_date_of_joining && (
              <div><span className="text-danger">TDOJ is required</span></div>
            )}
          <label htmlFor="Tentative_date_of_joining" className="labelEmploye">
            Tentative date of joining
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Date_of_joining"
              name="Date_of_joining"
              onChange={handleChange}
              value={formData.Date_of_joining}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Date_of_joining && (
              <div><span className="text-danger">DOJ is required</span></div>
            )}
          <label htmlFor="Date_of_joining" className="labelEmploye">
            Date of joining
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Probation_period_in_days"
              name="Probation_period_in_days"
              onChange={handleChange}
              value={formData.Probation_period_in_days}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Probation_period_in_days && (
              <div><span className="text-danger">Probation period is required</span></div>
            )}
          <label htmlFor="Probation_period_in_days" className="labelEmploye">
            Probation Period
          </label>
        </div>
        
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="confiramation_date"
              name="confiramation_date"
              onChange={handleChange}
              value={formData.confiramation_date}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.confiramation_date && (
              <div><span className="text-danger">Confermation date is required</span></div>
            )}
          <label htmlFor="confiramation_date" className="labelEmploye">
            Confermation Date
          </label>
        </div>

        <div className="form-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <label htmlFor="backedOff_toggle" className="labelEmploye mt-2 mr-4">
           Employee Status :
          </label>
          <button 
          className="btn btn-light">
           <span className="mr-3">Backed off</span> 
          <label className="switch">
          <input type="checkbox"
          defaultChecked={true}
            onClick={backedOftoggle}
          ></input>
          <span className="slider round"></span>
          </label>
          </button>
        </div>

      </div>
      <hr/>
      <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_personal_mobile_number"
              name="Employee_personal_mobile_number"
              onChange={handleChange}
              value={formData.Employee_personal_mobile_number}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_personal_mobile_number && (
              <div><span className="text-danger">Employee personal mobile no is required</span></div>
            )}
          <label htmlFor="Employee_personal_mobile_number" className="labelEmploye">
            Personal mobile No.
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_personal_email_ID"
              name="Employee_personal_email_ID"
              onChange={handleChange}
              value={formData.Employee_personal_email_ID}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_personal_email_ID && (
              <div><span className="text-danger">Employee personal emial is required</span></div>
            )}
          <label htmlFor="Employee_personal_email_ID" className="labelEmploye">
            Personal email
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_official_emil_ID"
              name="Employee_official_emil_ID"
              onChange={handleChange}
              value={formData.Employee_official_emil_ID}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_official_emil_ID && (
              <div><span className="text-danger">Employee official emial is required</span></div>
            )}
          
          <br />
          <label htmlFor="Employee_official_emil_ID" className="labelEmploye">
            Official email
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_official_mobile_number"
              name="Employee_official_mobile_number"
              onChange={handleChange}
              value={formData.Employee_official_mobile_number}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_official_mobile_number && (
              <div><span className="text-danger">Employee official mobile no is required</span></div>
            )}
          
          <br />
          <label htmlFor="Employee_official_mobile_number" className="labelEmploye">
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
            id="Employee_father_name"
            className="text-capitalize"
              name="Employee_father_name"
              onChange={handleChange}
              value={formData.Employee_father_name}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_father_name && (
              <div><span className="text-danger">father's name is required</span></div>
            )}
          <label htmlFor="Employee_father_name" className="labelEmploye">
            Father's Name
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_spouse_name"
            className="text-capitalize"
              name="Employee_spouse_name"
              onChange={handleChange}
              value={formData.Employee_spouse_name}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_spouse_name && (
              <div><span className="text-danger">Spouse name is required</span></div>
            )}
          <label htmlFor="Employee_spouse_name" className="labelEmploye">
            Spouse name
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            id="emergency_contact_no"
            className="text-capitalize"
              name="emergency_contact_no"
              onChange={handleChange}
              value={formData.emergency_contact_no}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.emergency_contact_no && (
              <div><span className="text-danger">Emergency contact no. is required</span></div>
            )}
          <label htmlFor="emergency_contact_no" className="labelEmploye">
            Emergency contact No.
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_emergency_contact_name"
            className="text-capitalize"
              name="Employee_emergency_contact_name"
              onChange={handleChange}
              value={formData.Employee_emergency_contact_name}
              disabled={disabled}
              ref={register({ required: true })}
            />
            <br />
            {errors.Employee_emergency_contact_name && (
              <div><span className="text-danger">Emergency contact name is required</span></div>
            )}
          <label htmlFor="Employee_emergency_contact_name" className="labelEmploye">
            Emergency contact name
          </label>
        </div>
             </div>
             <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_emergency_contact_relation"
            className="text-capitalize"
            name="Employee_emergency_contact_relation"
            onChange={handleChange}
            value={formData.Employee_emergency_contact_relation}
            disabled={disabled}
            ref={register({ required: true })}
            />
            <br />
            {errors.Employee_emergency_contact_relation && (
              <div><span className="text-danger">Emergency contact relation is required</span></div>
            )}
          <label htmlFor="Employee_emergency_contact_relation" className="labelEmploye">
            Emergency contact relation
          </label>
        </div>
        <div className="form-group col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
          <input
            type="text"
            id="emergency_name_relation_address"
            className="text-capitalize"
            name="emergency_name_relation_address"
            onChange={handleChange}
            value={formData.emergency_name_relation_address}
            disabled={disabled}
            ref={register({ required: true })}
            />
            <br />
            {errors.emergency_name_relation_address && (
              <div><span className="text-danger">Emergency relation address is required</span></div>
            )}
          <label htmlFor="emergency_name_relation_address" className="labelEmploye">
            Emergency contact address
          </label>
        </div>
    </div>


    {/* ======================================   residence  ====================================== */}

    <div className="row">
        <div className="form-group col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
          <input
            type="text"
            id="Employee_resident_address"
            className="text-capitalize"
            name="Employee_resident_address"
            onChange={handleChange}
            value={formData.Employee_resident_address}
            disabled={disabled}
            ref={register({ required: true })}
            />
            <br />
            {errors.Employee_resident_address && (
              <div><span className="text-danger">Emergency address is required</span></div>
            )}
          <br />
          <label htmlFor="Employee_resident_address" className="labelEmploye">
            Residence address
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_resident_PIN"
            className="text-capitalize"
            name="Employee_resident_PIN"
            onChange={handleChange}
            value={formData.Employee_resident_PIN}
            disabled={disabled}
            ref={register({ required: true })}
            />
            <br />
            {errors.Employee_resident_PIN && (
              <div><span className="text-danger">Residence Pin Code is required</span></div>
            )}
          
          <br />
          <label htmlFor="Employee_resident_PIN" className="labelEmploye">
           Residence Pin Code
          </label>
        </div>
    </div>




    <div className="row">
        <div className="form-group col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
          <input
            type="text"
            id="Employee_permanent_address"
            className="text-capitalize"
            name="Employee_permanent_address"
            onChange={handleChange}
            value={formData.Employee_permanent_address}
            disabled={disabled}
            ref={register({ required: true })}
            />
            <br />
            {errors.Employee_permanent_address && (
              <div><span className="text-danger">Permanenet Residence address is required</span></div>
            )}
          <label htmlFor="Employee_permanent_address" className="labelEmploye">
            Permanent address
          </label>
        </div>
        <div className="form-group col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
          <input
            type="text"
            id="Employee_permanent_PIN"
            className="text-capitalize"
            name="Employee_permanent_PIN"
            onChange={handleChange}
            value={formData.Employee_permanent_PIN}
            disabled={disabled}
            ref={register({ required: true })}
            />
            <br />
            {errors.Employee_permanent_PIN && (
              <div><span className="text-danger">Permanenet Residence Pin Code is required</span></div>
            )}
          <label htmlFor="Employee_permanent_PIN" className="labelEmploye">
           Permanant Pin 
          </label>
        </div>
    </div>
    </div>
        </form>
    </div>
  );
};
export default Employe_basic_info_backedOff;
