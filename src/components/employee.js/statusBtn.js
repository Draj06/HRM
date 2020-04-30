import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import { GET_ALL_EMP_STATUS_COUNT } from "../../queries";

const StatusBtn=(props)=> {
    const { error, loading, data } = useQuery(GET_ALL_EMP_STATUS_COUNT);
    if (error)
    return (
      <div className="alert alert-danger alert-dismissible">
        <button type="button" className="close" data-dismiss="alert"></button>
        <div align="center">
          <strong>{error.message}</strong>{" "}
        </div>
      </div>
    );

    if (loading)
    return (
      <Loader
        className="loaderCLassForGraph"
        type="ThreeDots"
        color="#0073e6"
      />
    );
    
    return (
        <div>

            <div className="row emp_sideRightBtns">
                {data.getEmployeeAllStatusCount.map(item=>{
            const className = props.activeButton === item.emp_status ? "primaryDarkColor" : "";
           return(
               <div 
               key={item.value}
               className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <button 
                 className={`btn primary_light mb-1 ${className}
                 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-1"
                 `}
                onClick={props.trigerOnStatusBtnClick}
                value={item.emp_status}
                >
                  {item.emp_status}
                  <span className="badge badge-pill primary">{item.total_count}</span>
                </button>
              </div>
              )
                   })}
            
          </div>
        </div>
    )
}
export default StatusBtn