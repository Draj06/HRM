import React, { useState, useEffect } from "react";
import "../../Styles/employee.css";
import { PAY_DATA, STAT_DATA, LatestPAY_DATA } from "../../queries";

import { useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import Datetime from "react-datetime";
import "../../Styles/payroll.css";

import ReactHTMLTableToExcel from "react-html-table-to-excel";

const payroll_parameters = [
  "Employee No",
  "Employee Name",
  "Department",
  " Designation",
  "Employee Status",
  " Month",
  " Actual Number of days",
  "Billable Number of days",
  "CTC",
  "Earned Fixed",
  "Earned Variable",
  "Gross Salary",
  "Deductions",
  "Net Salary",
  "Aadhaar Number",
  "UAN",
];
const checkbox_parameters = ["Department", "Designation", "Status"];

const Payroll = () => {
  const filterBy = ["emp_department", "emp_position", "emp_status"]; // Read from API

  const [year, setYear] = useState(1); // this is initail year
  const [month, setMonth] = useState(""); // this is initail month

  const [filterGroups, setFilterGroups] = useState({});
  const [handelDateChange, sethandelDateChange] = useState(false);
  const [filters, setFilters] = useState({});
  const [initFilter, setInitFilter] = useState({});
  const [initGroups, setInitGroups] = useState({});
  const [searchStatus, setSearchState] = useState("");

  // using query  for getting latest month and year having  paydata
  const { data: dataP, error: errorP, loading: loadingP } = useQuery(
    LatestPAY_DATA
  );


  const { error, loading, data } = useQuery(PAY_DATA, {
    variables: { year, month },
  });

  const { data: dataR, error: errorR, loading: loadingR } = useQuery(
    STAT_DATA,
    {
      variables: { year, month },
    }
  );

  useEffect(() => {
    if (data && dataP) {
      let id = 0;
    const unique = (prop) => {
      const res = [];
      data.getEmpPayroleByMonthYear.forEach((v) => {
        if (res.findIndex((i) => i[prop] === v[prop]) === -1)
          if (v[prop]) res.push({ id: id++, checked: false, [prop]: v[prop] });
      });
      return res;
    };
    
    let filterTmp = {};
    let groupTmp = {};
    filterBy.forEach((item) => {
      filterTmp[item] = [];
      groupTmp[item] = unique(item);
    });
    
    setInitFilter(filterTmp);
    setFilters(filterTmp);
    
    setInitGroups(groupTmp);
    setFilterGroups(groupTmp);
   if(handelDateChange===false)
   {

       let m = dataP.getPayroleLatestMonthAndYear.latest_month
       let y = dataP.getPayroleLatestMonthAndYear.latest_year
       console.log((m))
        setMonth(m)
        setYear(parseInt(y))  
        
   }
       
  };
    
    
  }, []);
 
  if (loading || loadingR || loadingP)
    return (
      <Loader
        className="loaderCLassForGraph"
        type="ThreeDots"
        color="#0073e6"
      />
    );
   
  const handleDate = (date) => {
    sethandelDateChange(true)
    let pickedDate = new Date(date);
    let pickedyear = pickedDate.getFullYear();
    let pickedmonth = pickedDate.toLocaleString("default", { month: "long" });
    console.log("picked year and month is" + pickedyear+":  " +pickedmonth);
    setYear(pickedyear);
    setMonth(pickedmonth);
    console.log(data)
  };

 

  const filterData = () => {
    let result = data.getEmpPayroleByMonthYear;
    Object.keys(filters).forEach((key) => {
      if (filters[key].length !== 0)
        result = result.filter(
          (item) => filters[key].indexOf(item[key]) !== -1
        );
    });
    return result;
  };

  const handleChange = (e) => {
    let id = e.target.id;
    let name = e.target.name;
    let filter = e.target.getAttribute("filter");
    let checked = e.target.checked;
    if (checked) {
      let newFilter = [...filters[filter]];
      newFilter.push(name);
      setFilters({ ...filters, [filter]: newFilter });
      console.log(filterData().length);
    } else {
      setFilters({
        ...filters,
        [filter]: filters[filter].filter((item) => item !== name),
      });
      console.log(filterData().length);
    }
    const tmp = filterGroups[filter];

    let updateGroup = [...tmp];
    const index = updateGroup.findIndex((i) => i.id.toString() === id);
    updateGroup[index].checked = checked;
    setFilterGroups({
      ...filterGroups,
      [filter]: updateGroup,
    });
  };

  const clearAll = () => {
    let tmp = { ...filterGroups };
    Object.keys(tmp).forEach((item) => {
      tmp[item].forEach((subItem) => {
        subItem.checked = false;
      });
    });
    setFilterGroups(tmp);
    setFilters(initFilter);
  };

  const searchInput = (e) => {
    setSearchState(e.target.value);
  };
  const test = filterData().filter((item) => {
    return (
      item.emp_name.toLowerCase().indexOf(searchStatus.toLowerCase()) !== -1 ||
      item.emp_number.toLowerCase().indexOf(searchStatus.toLowerCase()) !==
        -1 ||
      item.emp_aadhar_no.indexOf(searchStatus) !== -1 ||
      item.emp_uan_no.toLowerCase().indexOf(searchStatus.toLowerCase()) !== -1
    );
  });
  const btnClick = () => {
    setYear(dataP.getPayroleLatestMonthAndYear.latest_year); //set to year having data  got from query
    setMonth(dataP.getPayroleLatestMonthAndYear.latest_month); //set to month having data got from query
  };

  if (data.getEmpPayroleByMonthYear === null || error || errorR || errorP)
    return (
      <div className="container-fluid emp_Container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <h5 className="headingEmploye">Employee List</h5>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 emp_sideLeft">
            <label>Pick Month</label>
            <div>
              <Datetime
                className="calendar"
                dateFormat="YYYY-MM"
                timeFormat={false}
                onChange={handleDate}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10">
            <div className="container-fluid">
              <div className="alert alert-danger alert-dismissible">
                <div align="center">
                  <strong>
                    {" "}
                    No Data for Selected Month: {month} {year}. Click to go back
                    :{" "}
                  </strong>
                  <button className=" btn" onClick={btnClick}>
                    <span>
                      <i
                        className="fa fa-arrow-left"
                        style={{ fontsize: "50px", color: "#0d47a1" }}
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  //stat data
  const StatData = dataR.getTotalEmpCtcGrossSal;
  //console.log("the stat data is " + JSON.stringify(StatData));
  return (
    <div className="container-fluid emp_Container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <h5 className="headingEmploye">Employee List</h5>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 emp_sideLeft">
          <label>Pick Month</label>
          <div>
            <Datetime
              className="calendar"
              dateFormat="YYYY-MM"
              timeFormat={false}
              onChange={handleDate}
            />
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <label>Add filter</label>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
              align="right"
            >
              <p onClick={clearAll}
              className="clear"
              >
                Clear
              </p>
            </div>

            <div className="row checkBoxes">
              {filterBy.map((item) => (
                <div key={item.indexv} className="container-fluid">
                  <label className="custom-label">
                    {item == "emp_department"
                      ? checkbox_parameters[0]
                      : item == "emp_position"
                      ? checkbox_parameters[1]
                      : checkbox_parameters[2]}
                  </label>

                  {(filterGroups[item] || []).map((li) => (
                    <div key={li.id} className="custom-control custom-checkbox">
                      <div className="form-group each_form_group">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={li.id}
                          filter={item}
                          name={li[item]}
                          checked={li.checked}
                          onChange={handleChange}
                        />
                        <label className="custom-control-label" htmlFor={li.id}>
                          {li[item]}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10">
          <div className="container-fluid mt-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <div className="row statbar col-lg-12">
                <button type="button" className="btn primary_light mr-2">
                  Numer of Employees{" "}
                  <span className="badge badge-pill primary">
                    {StatData.count}
                  </span>
                </button>
                <button type="button" className="btn primary_light mr-2">
                  CTC{" "}
                  <span className="badge badge-pill primary">
                    {StatData.emp_total_ctc}
                  </span>
                </button>
                <button type="button" className="btn primary_light mr-2">
                  Gross Salary{" "}
                  <span className="badge badge-pill primary">
                    {StatData.emp_total_gross_salary}
                  </span>
                </button>

                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mr-2">
                  {/* Search Input */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search.. "
                    onChange={searchInput}
                  ></input>
                </div>

                <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  table="table-to-xls"
                  filename="Payroll"
                  sheet="payrolltablexls"
                  button
                  className="btn white_color_btn col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3"
                  buttonText="Download Excel"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid mt-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 table-responsive">
              <table
                className="table table-bordered table-hover"
                id="table-to-xls"
              >
                <thead className="primary_light">
                  <tr>
                    {payroll_parameters.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {test.map((item) => (
                    <tr>
                      <td>{item.emp_number}</td>
                      <td>{item.emp_name}</td>
                      <td>{item.emp_department}</td>
                      <td>{item.emp_position}</td>
                      <td>{item.emp_status}</td>
                      <td>{item.month_year}</td>
                      <td>{item.emp_actual_no_of_days}</td>
                      <td>{item.emp_billable_no_of_days}</td>
                      <td>{item.emp_ctc.toLocaleString("en-IN")}</td>
                      <td>{item.emp_earned_fixed.toLocaleString("en-IN")}</td>
                      <td>
                        {item.emp_earned_variable.toLocaleString("en-IN")}
                      </td>
                      <td>{item.emp_gross_salary.toLocaleString("en-IN")}</td>
                      <td>{item.emp_deduction.toLocaleString("en-IN")}</td>
                      <td>{item.emp_net_salary.toLocaleString("en-IN")}</td>
                      <td>{item.emp_aadhar_no}</td>
                      <td>{item.emp_uan_no}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payroll;
