import React,{useState,useEffect} from 'react'
import test from "../../../Test.json";
import { useForm } from "react-hook-form";

const ProfessionalBackgroundData=({item})=> {

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
              id="Name_of_the_company"
              name="Name_of_the_company"
              onChange={handleChange}
              value={formData.Name_of_the_company}
              disabled={true}
              ref={register({ required: true })}
          />
          <br />
          {errors.Name_of_the_company && (
              <div><span className="text-danger">Company name is required</span></div>
            )}
          
          <label htmlFor="Name_of_the_company" className="labelEmploye">
            Name of the company
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="Designation"
              name="Designation"
              onChange={handleChange}
              value={formData.Designation}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Designation && (
              <div><span className="text-danger">Designation is required</span></div>
            )}
          <label htmlFor="Designation" className="labelEmploye">
          Designation
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            className="text-capitalize"
              id="Company_location"
              name="Company_location"
              onChange={handleChange}
              value={formData.Company_location}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Company_location && (
              <div><span className="text-danger">Company location is required</span></div>
            )}
          <label htmlFor="Company_location" className="labelEmploye">
            Company location
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
          <label htmlFor="start_date" className="labelEmploye">
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
          <label htmlFor="End_date" className="labelEmploye">
            End date
          </label>
        </div>
        </div>  
        <hr /> 
        </div>
        </form>
        </div>
    )
}

export default ProfessionalBackgroundData
