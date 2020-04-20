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
                {data.getEmployeeAllStatusCount.map(item=>(

            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <button className="btn btn-outline-secondary form-control"
              onClick={props.trigerOnStatusBtnClick}
              value={item.emp_status}
              >
                {item.emp_status}
               
                <span className="badge badge-pill badge-primary">{item.total_count}</span>
              </button>
            </div>
                ))}
            
          </div>
        </div>
    )
}
export default StatusBtn