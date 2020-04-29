import React,{useState,useEffect} from "react";
import test from "../../../Test.json";
import { useForm } from "react-hook-form";

const EvaluationData = ({ item }) => {
  
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
    <div>
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
        </div>
        <div className="row">
          <div className="form-group col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
            <input
              type="text"
              className="text-capitalize"
              id="Name_of_the_evaluator"
              name="Name_of_the_evaluator"
              onChange={handleChange}
              value={formData.Name_of_the_evaluator}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Name_of_the_evaluator && (
              <div><span className="text-danger">Name of evaluator is required</span></div>
            )}
            <label htmlFor="Name_of_the_evaluator" className="labelEmploye">
              Name of the evaluator
            </label>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input
              type="text"
              className="text-capitalize"
              id="Enter_employee_note_here"
              name="Enter_employee_note_here"
              onChange={handleChange}
              value={formData.Enter_employee_note_here}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Enter_employee_note_here && (
              <div><span className="text-danger">Employee's evaluation required</span></div>
            )}
            <label htmlFor="Enter_employee_note_here" className="labelEmploye">
              Enter employee's evaluation note here
            </label>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <input 
              type="text"
              className="text-capitalize"
              id="Evaluation"
              name="Evaluation"
              onChange={handleChange}
              value={formData.Evaluation}
              disabled={disabled}
              ref={register({ required: true })}
          />
          <br />
          {errors.Evaluation  && (
              <div><span className="text-danger">Employee's evaluation required</span></div>
            )}
            <label htmlFor="Evaluation" className="labelEmploye">
              Evaluation
            </label>

            <div className="form-group mt-2"></div>
          </div>
        </div>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default EvaluationData;
