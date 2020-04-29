import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import { GET_EMP_EDUCATION } from "../../../queries";
import { useQuery } from "@apollo/react-hooks";
import Education from './educationBackgroundData'

const EducationalBackground=(props)=> {

    let type = props.type;
    let id = localStorage.getItem("emp_Id");

  const [disabled, setdisabled] = useState(true);
  const { register, handleSubmit, reset, errors } = useForm();
  const [circleloading, setcircleloading] = useState(false);
  const [cancelData, setCancelData] = useState({});
  const [showsave, setshowsave] = useState(false);
  const [formData, setFormData] = useState({});

    const { error, loading, data } = useQuery(GET_EMP_EDUCATION, {
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
    let empData = data.getEmployeeEducationInfo

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
        {empData.map((item) => (
        <Education item={item} />
      ))}
        </div>
    )
}

export default EducationalBackground
