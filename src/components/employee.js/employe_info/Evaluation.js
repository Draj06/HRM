import React,{useState} from 'react'
import Loader from "react-loader-spinner";
import { GET_EMP_Evaluation } from "../../../queries";
import EvaluationComp from './evaluationData'
import { useQuery } from "@apollo/react-hooks";

const Evaluation=(props)=> {
 
    let type = props.type;
    let id = localStorage.getItem("emp_Id");
    const { error, loading, data } = useQuery(GET_EMP_Evaluation, {
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

    let empData = data.getEmployeeEvaluationInfo
    console.log(JSON.stringify(empData))
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
        {empData.map(item => (
        <EvaluationComp item={item} />
      ))}
        
        
        </div>
    )
}

export default Evaluation
