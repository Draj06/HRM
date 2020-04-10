import React from "react";
import "../../Styles/employee.css";
import ProfilePic from "../../Images/profile.png";

const EmpStatus = () => {

  return (
    <div className="container-fluid emp_Container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-1">
          <h5 className="headingEmploye">Employee List</h5>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
          <div class="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-1">
              <select className="form-control">
                <option disabled selected>
                  Sort By
                </option>
                <option>Newest added</option>
                <option>SOmething1</option>
                <option>SOmething2</option>
              </select>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-1">
              <input
                type="text"
                className="form-control"
                placeholder="Search By Name.."
              ></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-1">
              <button className="btn btn-info form-control">Export</button>
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
              <p>Clear</p>
            </div>

            <div class="row checkBoxes">
              <h6 className="sidebarHeading">Deppartments :</h6>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="custom-control custom-checkbox">
              <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="developer" name="developer"></input>
              <label className="custom-control-label" for="developer">Developer</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="accounts" name="accounts"></input>
              <label className="custom-control-label" for="accounts">Accounts</label>
            </div>
            
            </div>
            </div>
            </div>

            
            <div class="row checkBoxes">
              <h6 className="sidebarHeading">Designations :</h6>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="custom-control custom-checkbox">
              <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="front_end_developer" name="front_end_developer"></input>
              <label className="custom-control-label" for="front_end_developer">Front-end developer</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="back_end_developer" name="back_end_developer"></input>
              <label className="custom-control-label" for="back_end_developer">Back-end developer</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="hr_manager" name="hr_manager"></input>
              <label className="custom-control-label" for="hr_manager">Hr manager</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="ca" name="ca"></input>
              <label className="custom-control-label" for="ca">CA</label>
            </div>
            
            </div>
            </div>
            </div>

            <div class="row checkBoxes">
              <h6 className="sidebarHeading">Religion :</h6>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="custom-control custom-checkbox">
              <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="religion1" name="religion1"></input>
              <label className="custom-control-label" for="religion1">Religion 1</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="religion2" name="religion2"></input>
              <label className="custom-control-label" for="religion2">Religion 1</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="religion3" name="religion3"></input>
              <label className="custom-control-label" for="religion3">Religion 3</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="religion4" name="religion4"></input>
              <label className="custom-control-label" for="religion4">Religion 4</label>
            </div>
            </div>
            </div>
            </div>

            <div class="row checkBoxes">
              <h6 className="sidebarHeading">Gender :</h6>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="custom-control custom-checkbox">
              <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="m" name="m"></input>
              <label className="custom-control-label" for="m">Male</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="f" name="f"></input>
              <label className="custom-control-label" for="f">Female</label>
            </div>
            </div>
            </div>
            </div>  
            <div class="row checkBoxes">
              <h6 className="sidebarHeading">Evaluation :</h6>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="custom-control custom-checkbox">
              <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="Recommended" name="recommended"></input>
              <label className="custom-control-label" for="recommended">Recommended</label>
            </div>
            <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="blackListed" name="blackListed"></input>
              <label className="custom-control-label" for="blackListed">Blacklisted</label>
              </div>
              <div className="form-group each_form_group">
              <input type="checkbox" className="custom-control-input" id="avd" name="avd"></input>
              <label className="custom-control-label" for="avd">Average</label>
              </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10">
          <div className="row emp_sideRightBtns">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <button className="btn btn-outline-secondary form-control">
                Active
                <span className="badge badge-pill badge-primary">5</span>
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <button className="btn btn-outline-secondary form-control">
                Arriving
                <span className="badge badge-pill badge-primary">10</span>
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <button className="btn btn-outline-secondary form-control">
                Exiting
                <span className="badge badge-pill badge-primary">4</span>
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <button className="btn btn-outline-secondary form-control">
                Exited
                <span className="badge badge-pill badge-primary">6</span>
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="row sideRightHeaders">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-4">
              <label className="empName">Dheeraj</label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
            <label className="empStatus">Employee Status --> </label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
              <button className="btn btn-success form-control">
                Active
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-1">
              <label class="empEvaluation">Evaluation</label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <select className="form-control">
                <option>Recommended</option>
                <option>Average</option>
                <option>Blacklisted</option>
              </select>
            </div>
                </div>
         
<hr></hr>

              


<div className="container-fluid">

          <div className="row">
            {/* -------------------------------------  div main emp details   ----------------------------------- */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                  <img
                    src={ProfilePic}
                    className="rounded"
                    width="60"
                    alt="profile pic"
                  ></img>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                  
                  <div className="row empDivMain1">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv1">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Emp No.</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Department</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Designation</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Position No.</label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv2">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">598216</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">HR</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Hr Manager</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">451</label>
                            </div>
                          </div>
                  </div>
                </div>
                
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-5">
                       <div className="row">

                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv3">
                          <div class="form-group each_form_group ">
                            <label className="empDetailsDiv3">Tentative DOJ</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">DOJ</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">Tentative DOE</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">DOE</label>
                            </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv4">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">12-03-2019</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">18-03-2019</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">05-03-2020</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">10-04-2020</label>
                            </div>
                            </div>
                          </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 empDiv5">
              
                      
                          
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Official Mail Id</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Official Mob.No.</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">CTC  </label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Age</label>
                            </div>
                          
                  
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
            
                  <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 empDiv6">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Dheeraj@test.com</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">9874563212</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">3L</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">35yrs</label>
                            </div>
                          </div>
                          
                  </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
            <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 empDiv7">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">State (Permanent)</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Religion</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">gender</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Adhar No</label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 empDiv8">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Bihar</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Hindu</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Male  </label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">123456789123</label>
                            </div>
                          </div>
                  </div>
            </div>
          </div>
          <hr></hr>



                     {/* ---------------------------   Employe 2   --------------------------------- */}
                     <div className="row sideRightHeaders">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-4">
              <label className="empName">Chandana</label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
            <label className="empStatus">Employee Status --> </label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
              <button className="btn btn-success form-control">
                Active
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-1">
              <label class="empEvaluation">Evaluation</label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <select className="form-control">
                <option>Recommended</option>
                <option>Average</option>
                <option>Blacklisted</option>
              </select>
            </div>
                </div>
         
<hr></hr>

              



          <div className="row">
            {/* -------------------------------------  div main emp details   ----------------------------------- */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                  <img
                    src={ProfilePic}
                    className="rounded"
                    width="60"
                    alt="profile pic"
                  ></img>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                  
                  <div className="row empDivMain1">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv1">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Emp No.</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Department</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Designation</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Position No.</label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv2">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">598216</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">HR</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Hr Manager</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">451</label>
                            </div>
                          </div>
                  </div>
                </div>
                
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-5">
                       <div className="row">

                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv3">
                          <div class="form-group each_form_group ">
                            <label className="empDetailsDiv3">Tentative DOJ</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">DOJ</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">Tentative DOE</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">DOE</label>
                            </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv4">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">12-03-2019</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">18-03-2019</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">05-03-2020</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">10-04-2020</label>
                            </div>
                            </div>
                          </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 empDiv5">
              
                      
                          
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Official Mail Id</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Official Mob.No.</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">CTC  </label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Age</label>
                            </div>
                          
                  
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
            
                  <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 empDiv6">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Chandana@test.com</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">9874563212</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">3L</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">35yrs</label>
                            </div>
                          </div>
                          
                  </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
            <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 empDiv7">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">State (Permanent)</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Religion</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">gender</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Adhar No</label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 empDiv8">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Bihar</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Hindu</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Male  </label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">123456789123</label>
                            </div>
                          </div>
                  </div>
            </div>
          </div>

      <hr></hr>

             {/* ---------------------------------------- Row 3 ------------------------------------ */}
             <div className="row sideRightHeaders">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-4">
              <label className="empName">Irraya</label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
            <label className="empStatus">Employee Status --> </label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
              <button className="btn btn-success form-control">
                Active
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-1">
              <label class="empEvaluation">Evaluation</label>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <select className="form-control">
                <option>Recommended</option>
                <option>Average</option>
                <option>Blacklisted</option>
              </select>
            </div>
                </div>
             <hr></hr>

             <div className="row">
            {/* -------------------------------------  div main emp details   ----------------------------------- */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                  <img
                    src={ProfilePic}
                    className="rounded"
                    width="60"
                    alt="profile pic"
                  ></img>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                  
                  <div className="row empDivMain1">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv1">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Emp No.</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Department</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Designation</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Position No.</label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv2">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">598216</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">HR</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Hr Manager</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">451</label>
                            </div>
                          </div>
                  </div>
                </div>
                
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-5">
                       <div className="row">

                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv3">
                          <div class="form-group each_form_group ">
                            <label className="empDetailsDiv3">Tentative DOJ</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">DOJ</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">Tentative DOE</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv3">DOE</label>
                            </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 empDiv4">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">12-03-2019</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">18-03-2019</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">05-03-2020</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">10-04-2020</label>
                            </div>
                            </div>
                          </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 empDiv5">
              
                      
                          
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Official Mail Id</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Official Mob.No.</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">CTC  </label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Age</label>
                            </div>
                          
                  
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
            
                  <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 empDiv6">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Iraaya@test.com</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">9874563212</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">3L</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">35yrs</label>
                            </div>
                          </div>
                          
                  </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
            <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 empDiv7">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">State (Permanent)</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Religion</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">gender</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv1">Adhar No</label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 empDiv8">
                          <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Bihar</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Hindu</label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">Male  </label>
                            </div>
                            <div class="form-group each_form_group">
                            <label className="empDetailsDiv2">123456789123</label>
                            </div>
                          </div>
                  </div>
            </div>
          </div>


          </div>

        </div>
      </div>
    </div>
  );
};
export default EmpStatus;
