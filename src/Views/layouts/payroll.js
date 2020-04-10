import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import Datetime from "react-datetime";
import "../../Styles/payroll.css";

export default class payroll extends Component {
  constructor() {
    super();
    this.DBquery = this.DBquery.bind(this);

    this.state = {
      UniqueStatus: [],
      UniqueDept: [],
      UniquePost: [],
      currentTime: new Date(),
      noData: "",
      value: "",
      showStore: "",
      date: "",
      pickedMonth: new Date().toLocaleString("default", { month: "long" }),
      pickedYear: [new Date().getFullYear()],
      position: "",
      deptartment: "",
      depLabel: "",
      payrol_values: [],
      count_val: [],
      basic_table: [],
      position_table: [],
      payroll_parameters: [
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
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleChangeDept = this.handleChangeDept.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    //event.persist();
    const value = event.target.value;
    this.setState({ value });
  }

  handleChangePosition(event) {
    const position = event.target.value;
    this.setState({ position });
  }

  handleChangeDept(event) {
    const deptartment = event.target.value;
    this.setState({ deptartment });
  }

  handleDate(date) {
    const pickedDate = new Date(date);
    const pickedYear = pickedDate.getFullYear();
    const pickedMonth = pickedDate.toLocaleString("default", { month: "long" });
    this.setState({ pickedMonth, pickedYear });
  }

  onClick() {
    this.setState({ showStore: true });
  }
  componentDidMount() {
    this.DBquery();
    setInterval(this.DBquery, 2000); // runs every 2 seconds.
  }

  async DBquery() {
    const client = new ApolloClient({
      uri:
        "https://duru-hrms-api.azurewebsites.net/graphql?code=GAm6nwwgzO3hAKaaa/ChrenUc2f3MuVZvi6ma3pSh/9Caq0DYO9QDg==",
    });
    try {
      let result1 = await client.query({
        query: gql`
              {
                getEmpPayroleByMonthYearStatus(year:${this.state.pickedYear},month:"${this.state.pickedMonth}",status:"${this.state.value}")
                {
                  emp_payrole_id
                  emp_id
                  emp_number
                  emp_name
                  emp_status
                  emp_salary_month
                  emp_salary_year
                  emp_dept_name
                  emp_position_name
                  emp_actual_no_of_days
                  emp_billable_no_of_days
                  emp_ctc
                  emp_earned_fixed
                  emp_earned_variable
                  emp_gross_salary
                  emp_deduction
                  emp_net_salary
                  emp_aadhar_no
                  emp_uan_no

                }
              }
            `,
      });

      let result2 = await client.query({
        query: gql`
          {
            getTotalEmpCtcGrossSal(year:${this.state.pickedYear}, month:"${this.state.pickedMonth}") {
              count
              emp_total_ctc
              emp_total_gross_salary
            }
          }
        `,
      });

      let result3 = await client.query({
        query: gql`
          {
            getEmpPayroleByMonthYear(year:${this.state.pickedYear}, month:"${this.state.pickedMonth}") {
              emp_payrole_id
              emp_id
              emp_number
              emp_name
              emp_status
              emp_salary_month
              emp_salary_year
              emp_dept_name
              emp_position_name
              emp_actual_no_of_days
              emp_billable_no_of_days
              emp_ctc
              emp_earned_fixed
              emp_earned_variable
              emp_gross_salary
              emp_deduction
              emp_net_salary
              emp_aadhar_no
              emp_uan_no
            }
          }
        `,
      });

      let result4 = await client.query({
        query: gql`
          {
            getEmpPayroleByMonthYearDeptPostStatus(year:${this.state.pickedYear},month:"${this.state.pickedMonth}",dept:"${this.state.deptartment}",
    post:"${this.state.position}",
    status:"${this.state.value}") {
              emp_payrole_id
              emp_id
              emp_number
              emp_name
              emp_status
              emp_salary_month
              emp_salary_year
              emp_dept_name
              emp_position_name
              emp_actual_no_of_days
              emp_billable_no_of_days
              emp_ctc
              emp_earned_fixed
              emp_earned_variable
              emp_gross_salary
              emp_deduction
              emp_net_salary
              emp_aadhar_no
              emp_uan_no
            }
          }
        `,
      });

      this.setState({
        payrol_values: result1.data.getEmpPayroleByMonthYearStatus, //status, month, year
        count_val: result2.data.getTotalEmpCtcGrossSal, // htmlFor stats count CTC, Gross salry
        basic_table: result3.data.getEmpPayroleByMonthYear, //just month and year
        position_table: result4.data.getEmpPayroleByMonthYearDeptPostStatus, //just month and year
      });

      //to test distinct values for Emp-Status
      let testDist = this.state.basic_table
        .map((item) => item.emp_status)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.setState({ UniqueStatus: testDist });

      //to test distinct values for Dept
      let testDistDept = this.state.basic_table
        .map((item) => item.emp_dept_name)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.setState({ UniqueDept: testDistDept });

      //to test distinct values for Position
      let testDistPost = this.state.basic_table
        .map((item) => item.emp_position_name)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.setState({ UniquePost: testDistPost });
    } catch (err) {
      // check if  result value  is  null or not
      if (this.state.payrol_values || this.state.count_val == null) {
        // console.log(" there is no data fro the selected month_year ");
        this.setState({ noData: true });
      } else if (this.state.position_table == null) {
        // console.log(" there is no data for the Dpt-Post-Moth searched  ");
      } else {
        // console.log(" the slected month has data ");
        this.setState({ noData: false });
        console.log("Something is not right in query ");
        console.error(err);
      }
    }
  }

  render() {
    if (this.state.noData == true) {
      return (
        <div>
          <div className="row">
            <div className="side col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 form-group">
              <div>
                <Datetime
                  className="calendar"
                  dateFormat="YYYY-MM"
                  timeFormat={false}
                  //input={false}
                  onChange={this.handleDate}
                />
              </div>
            </div>
            <div
              id="major "
              className=" col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 form-group"
            >
              {" "}
              <p>
                {" "}
                Oops ..No Data in {this.state.pickedMonth}{" "}
                {this.state.pickedYear} !
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="side col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 form-group">
            <div>
              <Datetime
                className="calendar"
                dateFormat="YYYY-MM"
                timeFormat={false}
                //input={false}
                onChange={this.handleDate}
              />
            </div>

            <label className="custom-label">Apply Filter{""}</label>
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 form-group">
              <div>
                <label className="custom-label">Employee Status </label>
                {/*checking for dynamic chkbox Emp-Status */}
                {this.state.UniqueStatus.map((item, index) => (
                  <div key={index}>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={item}
                        value={item}
                        onChange={this.handleChange}
                      ></input>
                      <label className="custom-control-label" htmlFor={item}>
                        {item}
                      </label>
                    </div>
                  </div>
                ))}

                <label className="custom-label">Department</label>
                {/*checking for dynamic chkbox Dept */}
                {this.state.UniqueDept.map((item, index) => (
                  <div key={index}>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={index + "Dept"}
                        value={item}
                        onChange={this.handleChangeDept}
                      ></input>
                      <label
                        className="custom-control-label"
                        htmlFor={index + "Dept"}
                      >
                        {item}
                      </label>
                    </div>
                  </div>
                ))}
                <label id="myLabel" className="custom-label">
                  Position
                </label>
                {/*checking for dynamic chkbox Position */}
                {this.state.UniquePost.map((item, index) => (
                  <div key={index}>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={index + "Post"}
                        value={item}
                        onChange={this.handleChangePosition}
                      ></input>
                      <label
                        className="custom-control-label"
                        htmlFor={index + "Post"}
                      >
                        {item}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div></div>
          </div>

          <div
            id="major "
            className=" col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 form-group"
          >
            <div className="row col-lg-12">
              <button type="button" className="btn btn-outline-secondary mr-1">
                Numer of Employees{" "}
                <span className="badge badge-pill badge-primary">
                  {this.state.count_val.count}
                </span>
              </button>
              <button type="button" className="btn btn-outline-secondary mr-1">
                CTC{" "}
                <span className="badge  badge-pill badge-primary">
                  {this.state.count_val.emp_total_ctc}
                </span>
              </button>
              <button type="button" className="btn btn-outline-secondary mr-1">
                Gross Salary{" "}
                <span className="badge  badge-pill badge-primary">
                  {this.state.count_val.emp_total_gross_salary}
                </span>
              </button>
            </div>
            <div className="table-responsive">
              <table
                id="pay"
                className="table table-hover table-bordered table-scrollable"
              >
                <thead className="table-secondary">
                  <tr>
                    {this.state.payroll_parameters.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                    <th
                      style={{
                        display: "none",
                      }}
                    >
                      Department
                    </th>
                  </tr>
                </thead>

                {this.state.value !== "" ? (
                  <tbody className="table table-bordered">
                    {this.state.payrol_values.map((v) => (
                      <tr key={v.emp_payrole_id}>
                        <td>{v.emp_number}</td>
                        <td>{v.emp_name}</td>
                        <td>{v.emp_status}</td>

                        <td>
                          {v.emp_salary_month} {v.emp_salary_year}
                        </td>
                        <td>{v.emp_actual_no_of_days}</td>
                        <td>{v.emp_billable_no_of_days}</td>
                        <td>{v.emp_ctc.toLocaleString("en-IN")}</td>
                        <td>{v.emp_earned_fixed.toLocaleString("en-IN")}</td>
                        <td>{v.emp_earned_variable.toLocaleString("en-IN")}</td>
                        <td>{v.emp_gross_salary.toLocaleString("en-IN")}</td>
                        <td>{v.emp_net_salary.toLocaleString("en-IN")}</td>
                        <td>{v.emp_aadhar_no}</td>
                        <td>{v.emp_uan_no}</td>
                        <td
                          style={{
                            display: "none",
                          }}
                        >
                          {v.emp_dept_name}
                        </td>
                        <td
                          style={{
                            display: "none",
                          }}
                        >
                          {v.emp_position_name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : this.state.deptartment &&
                  this.state.position &&
                  this.state.value !== "" ? (
                  <tbody className="table table-bordered">
                    {this.state.position_table.map((v) => (
                      <tr key={v.emp_payrole_id}>
                        <td>{v.emp_number}</td>
                        <td>{v.emp_name}</td>
                        <td>{v.emp_status}</td>

                        <td>
                          {v.emp_salary_month} {v.emp_salary_year}
                        </td>
                        <td>{v.emp_actual_no_of_days}</td>
                        <td>{v.emp_billable_no_of_days}</td>
                        <td>{v.emp_ctc.toLocaleString("en-IN")}</td>
                        <td>{v.emp_earned_fixed.toLocaleString("en-IN")}</td>
                        <td>{v.emp_earned_variable.toLocaleString("en-IN")}</td>
                        <td>{v.emp_gross_salary.toLocaleString("en-IN")}</td>
                        <td>{v.emp_net_salary.toLocaleString("en-IN")}</td>
                        <td>{v.emp_aadhar_no}</td>
                        <td>{v.emp_uan_no}</td>
                        <td
                          style={{
                            display: "none",
                          }}
                        >
                          {v.emp_dept_name}
                        </td>
                        <td
                          style={{
                            display: "none",
                          }}
                        >
                          {v.emp_position_name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody className="table table-bordered">
                    {this.state.basic_table.map((v) => (
                      <tr key={v.emp_payrole_id}>
                        <td>{v.emp_number}</td>
                        <td>{v.emp_name}</td>
                        <td>{v.emp_status}</td>
                        <td>
                          {v.emp_salary_month} {v.emp_salary_year}
                        </td>

                        <td>{v.emp_actual_no_of_days}</td>
                        <td>{v.emp_billable_no_of_days}</td>
                        <td>{v.emp_ctc.toLocaleString("en-IN")}</td>
                        <td>{v.emp_earned_fixed.toLocaleString("en-IN")}</td>
                        <td>{v.emp_earned_variable.toLocaleString("en-IN")}</td>
                        <td>{v.emp_gross_salary.toLocaleString("en-IN")}</td>
                        <td>{v.emp_net_salary.toLocaleString("en-IN")}</td>
                        <td>{v.emp_aadhar_no}</td>
                        <td>{v.emp_uan_no}</td>
                        <td
                          style={{
                            display: this.state.showStore ? "block" : "none",
                          }}
                        >
                          {v.emp_dept_name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}
