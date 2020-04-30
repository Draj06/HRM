import React, { useState,useEffect } from "react";
import Loader from "react-loader-spinner";
import { GET_EMP_POSITION } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
import test from "../../../Test.json";
import { useForm } from "react-hook-form";

const Employee_Position = (props) => {
  let type = props.type;
  let id = localStorage.getItem("emp_Id");

  const [disabled, setdisabled] = useState(true);
  const { register, handleSubmit,reset, errors } = useForm();
  const [circleloading,setcircleloading] = useState(false)
  const[cancelData,setCancelData] = useState({})
  const [showsave, setshowsave] = useState(false);
  const [formData, setFormData] = useState({});
  const { error, loading, data } = useQuery(GET_EMP_POSITION, {
    variables: { type, id },
  });

  useEffect(() => {
    if(data)
    {

      setFormData(data.getEmployeePositionDept);
      setCancelData(data.getEmployeePositionDept);
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
    )
    
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
     // seterrorOnCancel(false)
      setdisabled(true);
      setshowsave(false);
      setFormData(cancelData)
      reset();
     // console.log(errorOnCancel)
      
    }

  let empData = data.getEmployeePositionDept;
  
  if(empData===null || empData==="" || empData.length===0)
  return(

 <div className="alert alert-warning alert-dismissible">
     <button type="button" className="close" data-dismiss="alert"></button>
     <div align="center">
       <strong>Ooopppsss !!! No data</strong>{" "}
     </div>
   </div>
  )

  return (
    <div className="container-fluid">
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
      <div className="emp_sideLeft mt-2">
      
      <div className="row">
      
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_designation"
            name="Employee_designation"
            onChange={handleChange}
            value={formData.Employee_designation}
            disabled={disabled}
            ref={register({ required: true })}
            
          />
          <br />
          {errors.Employee_designation && (
              <div><span className="text-danger">Employee designation is required</span></div>
            )}
          <label htmlFor="Employee_designation" className="labelEmploye">
            Designation
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_department"
            name="Employee_department"
            onChange={handleChange}
            value={formData.Employee_department}
            disabled={disabled}
            ref={register({ required: true })}
            />
            
          <br />
          {errors.Employee_department && (
             <div><span className="text-danger">Employee department is required</span></div>
            )}
          <label htmlFor="Employee_department" className="labelEmploye">
            Department
          </label>
        </div>
      </div>
      
    </div>
        </form>
    </div>
  );
};
export default Employee_Position;
