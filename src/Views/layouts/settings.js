import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { DEPT_DESIG } from "../../queries";
import Loader from "react-loader-spinner";

const Settings = () => {
  const [header, setheader] = useState("Departments");
  const [headerMain, setheaderMain] = useState(" > Departments");
  const [initialState, setInitialState] = useState("departments");
  const { loading, error, data } = useQuery(DEPT_DESIG, {
    variables: { initialState },
  });

  if (error)
    return (
      <div class="alert alert-danger alert-dismissible">
        <button type="button" class="close" data-dismiss="alert"></button>
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
  console.log(data);
  const finalData = data.getAllDeptOrPositions;
  const btnClick = (e) => {
    let val = e.target.value;
    setInitialState(val);
    setheader(val);
    setheaderMain(" > " + val);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="cssHeadingClass text-capitalize col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          Setting {headerMain}
        </div>
        <div
          className="cssHeadingClass text-capitalize col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          align="right"
        >
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <button className="btn btn-info form-control  exportBtn">
              Export
            </button>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 form-group">
          <button
            onClick={btnClick}
            value="departments"
            className="btn btn-outline-secondary form-control"
          >
            Departments
          </button>
          <button
            onClick={btnClick}
            value="designations"
            className="btn btn-outline-secondary form-control mt-1"
          >
            Designations
          </button>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 form-group">
          <table className="table table-bordered table-hover">
            <thead className="table-active">
              <tr>
                <th className="text-capitalize">{header}</th>
              </tr>
            </thead>
            <tbody>
              {finalData.map((item) => (
                <tr>
                  <td>{item.emp_data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Settings;
