import React,{useState,useEffect} from 'react'
import test from "../../../Test.json";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import { GET_EMP_EXIT_STATUS } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
const ExitInfo =(props)=> {
    let type = props.type;
    let id = localStorage.getItem("emp_Id");

    const [disabled, setdisabled] = useState(true);
    const { register, handleSubmit, reset, errors } = useForm();
    const [circleloading, setcircleloading] = useState(false);
    const [cancelData, setCancelData] = useState({});
    const [showsave, setshowsave] = useState(false);
    const [formData, setFormData] = useState({});


    const { error, loading, data } = useQuery(GET_EMP_EXIT_STATUS, {
      variables: { type, id },
    });
    useEffect(() => {
      if (data) {
        setFormData(data.getEmployeeExitInfo);
        setCancelData(data.getEmployeeExitInfo);
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

  
  let empData = data.getEmployeeExitInfo

  
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
            <div className="row emp_sideLeft mt-2">
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="tdoe"
            value={empData.Employee_tentative_date_of_exit}
          />
          <br />
          <label htmlFor="bank_name" className="labelEmploye">
            Tentative date of exit
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="doe"
            value={empData.Employee_date_of_exit}
          />
          <br />
          <label htmlFor="doe" className="labelEmploye">
            Bank's branch
          </label>
        </div>
        <div className="form-group col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <input
            type="text"
            disabled
            id="Emp_exit_reason"
            value={empData.Emp_exit_reason}
          />
          <br />
          <label htmlFor="Emp_exit_reason" className="labelEmploye">
             Exit reson
          </label>
        </div>
        
    </div>
    </div>
    </form>
    </div>
    )
}
export default ExitInfo
