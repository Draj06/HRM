import React,{useState,useEffect} from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_BANK_DETAILS } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
import test from "../../../Test.json";
import { useForm } from "react-hook-form";

const Bank =(props)=> {
    let type = props.type;
    let id = localStorage.getItem("emp_Id");

  const [disabled, setdisabled] = useState(true);
  const { register, handleSubmit, reset, errors } = useForm();
  const [circleloading, setcircleloading] = useState(false);
  const [cancelData, setCancelData] = useState({});
  const [showsave, setshowsave] = useState(false);
  const [formData, setFormData] = useState({});

    const { error, loading, data } = useQuery(GET_EMP_BANK_DETAILS, {
      variables: { type, id },
    });
 
    useEffect(() => {
      if (data) {
        setFormData(data.getEmployeeBankInfo);
        setCancelData(data.getEmployeeBankInfo);
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

  
  let empData = data.getEmployeeBankInfo

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
            <div className="row emp_sideLeft mt-2">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_Bank"
            name="Employee_Bank"
            onChange={handleChange}
            value={formData.Employee_Bank}
            disabled={disabled}
            ref={register({ required: true })}
            
          />
          <br />
          {errors.Employee_Bank && (
              <div><span className="text-danger">Employee Bank name is required</span></div>
            )}
          <label htmlFor="Employee_Bank" className="labelEmploye">
            Bank's name
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_bank_branch"
            name="Employee_bank_branch"
            onChange={handleChange}
            value={formData.Employee_bank_branch}
            disabled={disabled}
            ref={register({ required: true })}
            
          />
          <br />
          {errors.Employee_bank_branch && (
              <div><span className="text-danger">Employee Bank branch is required</span></div>
            )}
          <label htmlFor="Employee_bank_branch" className="labelEmploye">
            Bank's branch
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            id="Employee_bank_account_number"
            name="Employee_bank_account_number"
            onChange={handleChange}
            value={formData.Employee_bank_account_number}
            disabled={disabled}
            ref={register({ required: true })}
            
          />
          <br />
          {errors.Employee_bank_account_number && (
              <div><span className="text-danger">Employee Bank account no. is required</span></div>
            )}
          <label htmlFor="Employee_bank_account_number" className="labelEmploye">
          Bank's account number
          </label>
        </div>
        
    </div>
    </form>
    </div>
    )
}
export default Bank
