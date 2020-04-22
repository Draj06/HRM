import React, { useState } from "react";

import { STAT_DATA, PAY_DATA } from "../../queries";
import { useQuery } from "@apollo/react-hooks";
import Datetime from "react-datetime";
import Loader from "react-loader-spinner";
import "../../Styles/payroll.css";

const payroll_parameters = [
  "Employee no",
  "Name",
  "Employee Status",
  " Month",
  " Actual No of days",
  "Billable No of days",
  " CTC",
  "Earned Fixed",
  "Earned Variable",
  "Gross Salary",
  "Net Salary",
  "Aadhar",
  "UAN",
  "Department",
  " Position",
];

const Payroll = () => {
  const [month, setMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  ); // this is initail month
  const [year, setYear] = useState(new Date().getFullYear()); // this is initail year

  const [filters, setFilters] = useState({
    emp_dept_name: [],
    emp_status: [],
    emp_position_name: [],
  });

  const result1 = useQuery(PAY_DATA, {
    variables: { year, month },
  });

  const result2 = useQuery(STAT_DATA, {
    variables: { year, month },
  });

  if (result1.loading)
    return (
      <Loader
        className="loaderCLassForGraph"
        type="ThreeDots"
        color="#0073e6"
      />
    );
  /*
  if (result1.error)
    return (
      <div align="center">
        <h5>No Data for Selected Month: {month + year} </h5>
      </div>
    );
*/
  if (result2.loading)
    return (
      <Loader
        className="loaderCLassForGraph"
        type="ThreeDots"
        color="#0073e6"
      />
    );
  /*
  if (result2.error)
    return (
      <div>
        <h5>No Data for Selected Month: {month + year} </h5>
      </div>
    );
*/
  const handleDate = (date) => {
    let pickedDate = new Date(date);
    let year = pickedDate.getFullYear();
    let month = pickedDate.toLocaleString("default", { month: "long" });
    setYear(year);
    setMonth(month);
  };

  const basicTable = result1.data.getEmpPayroleByMonthYear;
  const StatData = result2.data.getTotalEmpCtcGrossSal;

  //function to filter before putting data in table
  const filterData = () => {
    let result = basicTable;
    Object.keys(filters).forEach((key) => {
      if (filters[key].length !== 0)
        result = result.filter(
          (item) => filters[key].indexOf(item[key]) !== -1
        );
    });
    return result;
  };
  //handle filter change
  const handleChange = (e) => {
    let name = e.target.name;
    let filter = e.target.getAttribute("filter");
    let checked = e.target.checked;
    if (checked) {
      let newFilter = [...filters[filter]];
      newFilter.push(name);
      setFilters({ ...filters, [filter]: newFilter });
    } else {
      setFilters({
        ...filters,
        [filter]: filters[filter].filter((item) => item !== name),
      });
    }
  };
  //function to pick unique
  let id = 0;
  const unique = (prop) => {
    const res = [];
    basicTable.forEach((v) => {
      if (res.findIndex((i) => i[prop] === v[prop]) === -1)
        res.push({ id: id++, [prop]: v[prop] });
    });
    return res;
  };
  const checkBoxDepartment = unique("emp_dept_name");

  const checkBoxol_Status = unique("emp_status");

  const checkBoxol_Position = unique("emp_position_name");

  //if month picked has no data, show only calendar else show full
  if (result1.error || result2.error) {
    return (
      <div className="row">
        <div className="side col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 emp_sideLeft">
          <div>
            <Datetime
              className="calendar"
              dateFormat="YYYY-MM"
              timeFormat={false}
              //input={false}
              onChange={handleDate}
              //defaultValue={new Date()}
            />
          </div>
        </div>
        <div className=" col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 form-group">
         
              <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert"></button>
                <div align="center"><strong>{"OOpppss !!! No data for  "}{month+" "+year}</strong> </div>
              </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="side col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 emp_sideLeft">
          <div>
            <Datetime
              className="calendar"
              dateFormat="YYYY-MM"
              timeFormat={false}
              //input={false}
              onChange={handleDate}
              //defaultValue={new Date()}
            />
          </div>
          {/*----Filters------ */}
          <label className="custom-label">Add Filters{""}</label>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <div className="row checkBoxes">
              <label className="custom-label">Department</label>
              {checkBoxDepartment.map((li) => (
                <div key={li.id} className="custom-control custom-checkbox">
                  <div className="custom-control custom-checkbox each_form_group">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={li.id}
                      name={li.emp_dept_name}
                      filter="emp_dept_name"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor={li.id}>
                      {li.emp_dept_name}
                    </label>
                  </div>
                </div>
              ))}
              <label className="custom-label">Position</label>
              {checkBoxol_Position.map((li) => (
                <div key={li.id} className="custom-control custom-checkbox">
                  <div className="custom-control custom-checkbox each_form_group">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={li.id}
                      filter="emp_position_name"
                      name={li.emp_position_name}
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor={li.id}>
                      {li.emp_position_name}
                    </label>
                  </div>
                </div>
              ))}
              <label className="custom-label">Status</label>
              {checkBoxol_Status.map((li) => (
                <div key={li.id} className="custom-control custom-checkbox">
                  <div className="custom-control custom-checkbox each_form_group">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={li.id}
                      name={li.emp_status}
                      filter="emp_status"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor={li.id}>
                      {li.emp_status}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 form-group">
          <div className="row col-lg-12">
            <button type="button" className="btn btn-outline-secondary mr-2">
              Numer of Employees{" "}
              <span className="badge badge-pill badge-primary">
                {StatData.count}
              </span>
            </button>
            <button type="button" className="btn btn-outline-secondary mr-2">
              CTC{" "}
              <span className="badge  badge-pill badge-primary">
                {StatData.emp_total_ctc}
              </span>
            </button>
            <button type="button" className="btn btn-outline-secondary mr-2">
              Gross Salary{" "}
              <span className="badge  badge-pill badge-primary">
                {StatData.emp_total_gross_salary}
              </span>
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-secondary">
                <tr>
                  {payroll_parameters.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filterData().map((item) => (
                  <tr key={item.emp_payrole_id}>
                    <td>{item.emp_number}</td>
                    <td>{item.emp_name}</td>
                    <td>{item.emp_status}</td>
                    <td>
                      {item.emp_salary_month} {item.emp_salary_year}
                    </td>
                    <td>{item.emp_actual_no_of_days}</td>
                    <td>{item.emp_billable_no_of_days}</td>
                    <td>{item.emp_ctc.toLocaleString("en-IN")}</td>
                    <td>{item.emp_earned_fixed.toLocaleString("en-IN")}</td>
                    <td>{item.emp_earned_variable.toLocaleString("en-IN")}</td>
                    <td>{item.emp_gross_salary.toLocaleString("en-IN")}</td>
                    <td>{item.emp_net_salary.toLocaleString("en-IN")}</td>
                    <td>{item.emp_aadhar_no}</td>
                    <td>{item.emp_uan_no}</td>
                    <td>{item.emp_dept_name}</td>
                    <td>{item.emp_position_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Payroll;
