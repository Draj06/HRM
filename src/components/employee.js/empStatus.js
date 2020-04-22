import React, { useState,useEffect } from "react";
import "../../Styles/employee.css";
import { GET_EMPLOYEE_DATA } from "../../queries";
import StatusBtn from "./statusBtn";
import ProfilePic from "../../Images/profile.png";
import { useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const EmpStatus = () => {
  const history = useHistory();
  const filterBy = [
    "Department",
    "Position",
    "Religion",
    "Gender",
    "Evaluation"
  ]; // Read from API
  const [filterGroups, setFilterGroups] = useState({});

  const [filters, setFilters] = useState({});
  const [initFilter, setInitFilter] = useState({});
  const [initGroups, setInitGroups] = useState({});
  const [status, setStatus] = useState("Active");
  const [searchStatus, setSearchState] = useState("")
  const { error, loading, data } = useQuery(GET_EMPLOYEE_DATA, {
    variables: { status },
  });

  useEffect(() => {
    if (!data) return;

    let id = 0;
    const unique = prop => {
      const res = [];
      data.getEmpDetailsByEmpStatus.forEach(v => {
        if (res.findIndex(i => i[prop] === v[prop]) === -1)
          if (v[prop]) res.push({ id: id++, checked: false, [prop]: v[prop] });
      });
      return res;
    };

    let filterTmp = {};
    let groupTmp = {};
    filterBy.forEach(item => {
      filterTmp[item] = [];
      groupTmp[item] = unique(item);
    });

    setInitFilter(filterTmp);
    setFilters(filterTmp);

    setInitGroups(groupTmp);
    setFilterGroups(groupTmp);
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

  
    const filterData = () => {
      let result = data.getEmpDetailsByEmpStatus;
      Object.keys(filters).forEach(key => {
        if (filters[key].length !== 0)
          result = result.filter(item => filters[key].indexOf(item[key]) !== -1);
      });
      return result;
    };
  
    const handleChange = e => {
      let id = e.target.id;
      let name = e.target.name;
      let filter = e.target.getAttribute("filter");
      let checked = e.target.checked;
      if (checked) {
        let newFilter = [...filters[filter]];
        newFilter.push(name);
        setFilters({ ...filters, [filter]: newFilter });
        console.log(filterData().length)
      } else {
        setFilters({
          ...filters,
          [filter]: filters[filter].filter(item => item !== name)
        });
        console.log(filterData().length)
      }
      const tmp = filterGroups[filter];
  
      let updateGroup = [...tmp];
      const index = updateGroup.findIndex(i => i.id.toString() === id);
      updateGroup[index].checked = checked;
      setFilterGroups({
        ...filterGroups,
        [filter]: updateGroup
      });
    };
  
    const clearAll = () => {
      let tmp = { ...filterGroups };
      Object.keys(tmp).forEach(item => {
        tmp[item].forEach(subItem => {
          subItem.checked = false;
        });
      });
      setFilterGroups(tmp);
      setFilters(initFilter);
    };
  
  
  const empNameOnClick = (emp) => {
    
  console.log(emp.emp_id)
   localStorage.removeItem('emp_Id')
   localStorage.removeItem('emp_status')
   localStorage.removeItem('status_for_toggle')
   if(emp.emp_status==="Backedoff")
   {
    localStorage.setItem('status_for_toggle',"Arriving")
   }
   else{
    localStorage.setItem('status_for_toggle',emp.emp_status)
   }
   localStorage.setItem('emp_Id',emp.emp_id)
   localStorage.setItem('emp_status',emp.emp_status)
   history.push('/employee_profile')
  };

  const StatusBtnOnClick = (e) =>{
     setStatus(e.target.value)
     
  }

const searchInput =(e) =>{
  setSearchState(e.target.value)
}
const test = filterData().filter(item=>{
  return item.emp_name.toLowerCase().indexOf(searchStatus.toLowerCase()) !== -1
})
  return (
    <div className="container-fluid emp_Container">
      
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h5 className="headingEmploye">Employee List</h5>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <select className="form-control">
                <option disabled selected>
                  Sort By
                </option>
                <option>Newest added</option>
                <option>SOmething1</option>
                <option>SOmething2</option>
              </select>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search By Name.."
                onChange={searchInput}
              ></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">

            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="btn white_color_btn col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
              table="empTable"
              filename="Employee"
              sheet="tablexls"
              buttonText="Export"
                />
              
              {/* <button className="btn btn-info form-control">Export</button> */}
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row">
      <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 emp_sideLeft">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <label>Add filter</label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" align="center">
              <p onClick={clearAll}>Clear</p>
            </div>
            
            <div className="row checkBoxes">
            {filterBy.map(item => (
        <div className="container-fluid">
          
          <label className="custom-label">{item}</label>
          {(filterGroups[item] || []).map(li => (
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
          {/* --------------------------------------------------------- */}
          <StatusBtn trigerOnStatusBtnClick={StatusBtnOnClick} />
          <hr></hr>

          <div className="container-fluid">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 table-responsive">
              <table className="table table-bordered table-hover" id="empTable">
                <thead className="table-secondary">
                  <tr>
                    <th></th>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>DOJ</th>
                    <th>Official mail id</th>
                    <th>Official Mob. No.</th>
                    <th>CTC</th>
                    <th>Age</th>
                    <th>State (Permanent)</th>
                    <th>Religion</th>
                    <th>Gender</th>
                    <th>Adhar No</th>
                    <th>Religion</th>
                    <th>status</th>
                    <th>Evaluation</th>
                  </tr>
                </thead>
                <tbody>
                  { test.map((item) => (
                    <tr>
                      <td>
                        <img
                          src={ProfilePic}
                          width="40px"
                          height="40px"
                          className="empImage"
                          alt="Image"
                        ></img>
                      </td>
                      <td >{item.emp_number}</td>
                      <td><span className="empNameTable" onClick={()=> empNameOnClick(item)}>
                        {item.emp_name}</span>
                      </td>
                      <td>{item.Department}</td>
                      <td id="empNo">{item.Position}</td>
                      <td>{item.emp_doj}</td>
                      <td>{item.emp_official_email}</td>
                      <td>{item.emp_official_mobile}</td>
                      <td>{item.emp_ctc}</td>
                      <td>{item.emp_age}</td>
                      <td>{item.emp_permanent_state}</td>
                      <td>{item.Religion}</td>
                      <td>{item.Gender}</td>
                      <td>{item.emp_aadhar_no}</td>
                      <td>{item.Religion}</td>
                      <td>{item.emp_status}</td>
                      <td>{item.Evaluation}</td>
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
export default EmpStatus;
