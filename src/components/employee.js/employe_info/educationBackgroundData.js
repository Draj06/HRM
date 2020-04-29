import React,{useState,useEffect} from 'react'
import test from "../../../Test.json";
import { useForm } from "react-hook-form";
const EducationBackgroundData = ({ item }) => {
  
    const [disabled, setdisabled] = useState(true);
    const { register, handleSubmit, reset, errors } = useForm();
    const [circleloading, setcircleloading] = useState(false);
    const [cancelData, setCancelData] = useState({});
    const [showsave, setshowsave] = useState(false);
    const [formData, setFormData] = useState({});
  
  
    useEffect(() => {
      if (item) {
        setFormData(item);
        setCancelData(item);
      }
    }, [item]);
    const edit = () => {
      setdisabled(false);
      setshowsave(true);
    };
    const onSubmit = (e) => {
      console.log(e);
      setcircleloading(true);
      setdisabled(true);
    };
  
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const cancel = () => {
      setdisabled(true);
      setshowsave(false);
      setFormData(cancelData);
      reset();
    };
    
    return (
      
            <div className="emp_sideLeft">
        
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mr-2">
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
       
       <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="Employee_qualification"
              name="Employee_qualification"
              onChange={handleChange}
              value={formData.Employee_qualification}
              disabled={true}
              ref={register({ required: true })}
          />
          <br />
          {errors.Employee_qualification && (
              <div><span className="text-danger">Qualification is required</span></div>
            )}
          <label htmlFor="Employee_qualification" className="labelEmploye">
            Qualification
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="Employee_specification"
              name="Employee_specification"
              onChange={handleChange}
              value={formData.Employee_specification}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Employee_specification && (
              <div><span className="text-danger">Specification is required</span></div>
            )}  
          <label htmlFor="Employee_specification" className="labelEmploye">
           Specification
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="Institute_name"
              name="Institute_name"
              onChange={handleChange}
              value={formData.Institute_name}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Institute_name && (
              <div><span className="text-danger">Institute name is required</span></div>
            )}  
          <label htmlFor="Institute_name" className="labelEmploye">
            Institute name
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="Start_date"
              name="Start_date"
              onChange={handleChange}
              value={formData.Start_date}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Start_date && (
              <div><span className="text-danger">Start date is required</span></div>
            )}  
          <label htmlFor="Start_date" className="labelEmploye">
            Start date
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="End_date"
              name="End_date"
              onChange={handleChange}
              value={formData.End_date}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.End_date && (
              <div><span className="text-danger">End date is required</span></div>
            )}  
          <label htmlFor="end_date" className="labelEmploye">
            End date
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="CGPA"
              name="CGPA"
              onChange={handleChange}
              value={formData.CGPA}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.CGPA && (
              <div><span className="text-danger">CGPA is required</span></div>
            )}  
          <label htmlFor="CGPA" className="labelEmploye">
            CGPA
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="Percentage"
              name="Percentage"
              onChange={handleChange}
              value={formData.Percentage}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Percentage && (
              <div><span className="text-danger">Percentage is required</span></div>
            )}  
          <label htmlFor="Percentage" className="labelEmploye">
            Percentage
          </label>
        </div>
        
        </div> 
        <hr /> 
        </div>
        </form>
        
         </div>
        
    )
}

export default EducationBackgroundData
