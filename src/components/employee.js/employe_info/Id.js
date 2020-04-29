import React,{useState,useEffect} from "react";
import test from "../../../Test.json";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import { GET_EMP_ID } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";

const Id = (props) => {
  let type = props.type;
  let id = localStorage.getItem("emp_Id");

  const [disabled, setdisabled] = useState(true);
  const { register, handleSubmit, reset, errors } = useForm();
  const [circleloading, setcircleloading] = useState(false);
  const [cancelData, setCancelData] = useState({});
  const [showsave, setshowsave] = useState(false);
  const [formData, setFormData] = useState({});

  const { error, loading, data } = useQuery(GET_EMP_ID, {
    variables: { type, id },
  });

  useEffect(() => {
    if (data) {
      setFormData(data.getEmployeeIdProofInfo);
      setCancelData(data.getEmployeeIdProofInfo);
    }
  }, [data]);

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

  let empData = data.getEmployeeIdProofInfo;

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

  if (empData === null)
    return (
      <div className="alert alert-danger alert-dismissible">
        <button type="button" className="close" data-dismiss="alert"></button>
        <div align="center">
          <strong>Ooopppsss !!! No data</strong>{" "}
        </div>
      </div>
    );

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
            id="Employee_pan"
            name="Employee_pan"
            onChange={handleChange}
            value={formData.Employee_pan}
            disabled={disabled}
            ref={register({ required: true })}
            
          />
          <br />
          {errors.Employee_pan && (
              <div><span className="text-danger">Employee PAN is required</span></div>
            )}
          <label htmlFor="Employee_pan" className="labelEmploye">
            PAN Number
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Emploeyee_UAN"
            name="Emploeyee_UAN"
            onChange={handleChange}
            value={formData.Emploeyee_UAN}
            disabled={disabled}
            ref={register({ required: true })}
            
          />
          <br/>
          {errors.Emploeyee_UAN && (
              <div><span className="text-danger">Employee UAN is required</span></div>
            )}
          <label htmlFor="Emploeyee_UAN" className="labelEmploye">
            UAN
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="emp_designation"
            name="emp_designation"
            onChange={handleChange}
            value={formData.emp_designation}
            disabled={disabled}
            ref={register({ required: true })}
            
          />
          <br />
          {errors.emp_designation && (
              <div><span className="text-danger">Employee designation is required</span></div>
            )}
          <label htmlFor="emp_designation" className="labelEmploye">
            PF Number
          </label>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_ESI_no"
            name="Employee_ESI_no"
            onChange={handleChange}
            value={formData.Employee_ESI_no}
            disabled={disabled}
            ref={register({ required: true })}
            
          />
          <br />
          {errors.Employee_ESI_no && (
              <div><span className="text-danger">Employee ESI no. is required</span></div>
            )}
          <label htmlFor="Employee_ESI_no" className="labelEmploye">
            ESI Number
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_Aadhar_number"
            name="Employee_Aadhar_number"
            onChange={handleChange}
            value={formData.Employee_Aadhar_number}
            disabled={disabled}
            ref={register({ required: true })}
          />
          <br />
          {errors.Employee_Aadhar_number && (
              <div><span className="text-danger">Employee Adhar no. is required</span></div>
            )}
          <label htmlFor="Employee_Aadhar_number" className="labelEmploye">
            Adhar Number
          </label>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_passport_number"
            name="Employee_passport_number"
            onChange={handleChange}
            value={formData.Employee_passport_number}
            disabled={disabled}
            ref={register({ required: true })}
          />
          <br />
          {errors.Employee_passport_number && (
              <div><span className="text-danger">Employee passport no. is required</span></div>
            )}
          <label htmlFor="Employee_passport_number" className="labelEmploye">
            Passport Number
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_passport_validity"
            name="Employee_passport_validity"
            onChange={handleChange}
            value={formData.Employee_passport_validity}
            disabled={disabled}
            ref={register({ required: true })}
          />
          <br />
          {errors.Employee_passport_validity && (
              <div><span className="text-danger">Employee passport validity is required</span></div>
            )}
          <label htmlFor="Employee_passport_validity" className="labelEmploye">
            Passport validity
          </label>
        </div>
      </div>
      </div>
      </form>
    </div>
  );
};
export default Id;
