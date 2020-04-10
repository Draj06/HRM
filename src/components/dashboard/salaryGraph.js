import React, { useState } from 'react'
import '../../Styles/dashboard.css'
import SalaryDeptGraph from '../dashboard/salaryGraphDeptWise'
import SalaryGraph2 from '../dashboard/salaryGraph2'
import SalaryCount from "../../components/dashboard/salaryuCount";
import { Chart } from "react-google-charts";
import Loader from 'react-loader-spinner'
import {SALARY_GRAPH1} from '../../queries'
import { useQuery } from '@apollo/react-hooks';


const options = {
  curveType: "function",
  seriesType: "line",
  enableInteractivity: true,
  
  hAxis: { textStyle: { color: "green", underline: true,bold:"1000" } },
  series: {
    
    3: { targetAxisIndex: 1,type: 'bars',color:'66a3ff' }
    
  },
  vAxes: {
    // Adds titles to each axis.
    0: { title: "Sum of money" },
    1: { title: "Total employee" }
  },

  legend: { position: "bottom" },
  
};


const SalaryGraph =()=>{
  const[childVisible,setchildVisible] = useState(false)
  const[deptVisible,setdeptVisible] = useState(false)
  const {error,loading,data} = useQuery(SALARY_GRAPH1)
    if(error)  

    if(error) return <div class="alert alert-danger alert-dismissible">
    <button type="button" class="close" data-dismiss="alert"></button>
    <div align="center"><strong>{error.message}</strong> </div>
  </div>

    if(loading) return <Loader 
    className="loaderCLassForGraph"
    type="ThreeDots"
    color="#0073e6"
    />
    const btnClick =()=>{
      setdeptVisible(false)
     }
    const dataWIthoutType = data.getDashboardSalaryActiveCount.map(item=>{
      return{
        mon_year:item.mon_year,
        total_ctc:item.total_ctc,
        total_gross_salary:item.total_gross_salary,
        total_salary_variation:item.total_salary_variation,
        total_count:item.total_count
       
      }
    })
    const header = [["Month","CTC","Gross Salary","Variation of CTC","Total no. of employees"]]
     const dataArr = dataWIthoutType.map(obj => Object.values(obj))
     const finalData = header.concat(dataArr)
     

      const  onChangeSalary=() => {
        setchildVisible(!childVisible)
      
      }
  
      const chartEvents = [
        {
          eventName: "ready",
          callback: ({ chartWrapper, google }) => {
            let svg = document.querySelector("svg");
            let styles = 'text[text-anchor="middle"] { cursor: pointer; }';
            var css = document.createElement("style");
            if (css.styleSheet) {
              css.styleSheet.cssText = styles;
            } else {
              css.appendChild(document.createTextNode(styles));
            }
            svg.appendChild(css);
      
            var handler = function(e) {
              // console.log(e);
              var parts = e.targetID.split("#");
              if (parts.indexOf("label") >= 0) {
                let idx = parts[parts.indexOf("label") + 1];
                  idx = parseInt(idx);
                  var onClickData = finalData[idx + 1][0]
                
                localStorage.removeItem("Month_Dept_salary")
                localStorage.setItem("Month_Dept_salary",onClickData)
                setdeptVisible(!deptVisible)
                
              }
            };
            google.visualization.events.addListener(
              chartWrapper.getChart(),
              "click",
              handler
            );
          }
        }
      ];
     
            if(childVisible){
              return (
                <div>
                  <div className="row graphHeading">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <select
                  onChange={onChangeSalary}
                  className="form-control salaryOption">
                  <option>Salary Graph1</option>
                  <option>Salary Graph2</option>
                </select>
                </div>
                </div>
    
                <div><SalaryCount />
                <div className="salaryGraph">
                {  childVisible ? <div>    
                <SalaryGraph2 /> 
                </div> 
                :
                <Chart
                chartType="LineChart"
                width="100%"
                height="350px"
                data={finalData}
                options={options}
                chartEvents={chartEvents}
                chartLanguage={'en-IN'}
                legendToggle
    
                />
                }
                </div>
                </div>
                </div>
    
                ) 
            }
            else{

            
            return (
            <div>
              <div className="row graphHeading">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <select
              onChange={onChangeSalary}
              className="form-control salaryOption">
              <option>Salary Graph1</option>
              <option>Salary Graph2</option>
            </select>
            </div>
            </div>

            <div><SalaryCount />
            <div className="salaryGraph">
            {  deptVisible ? <div>
            <span 
            onClick={btnClick}
            className="btn btn-outline-success"><i className="fas fa-backward "></i></span>      
            <SalaryDeptGraph /> 
            </div> 
            :
            <Chart
            chartType="LineChart"
            width="100%"
            height="350px"
            data={finalData}
            options={options}
            chartEvents={chartEvents}
            legendToggle

            />
            }
            </div>
            </div>
            </div>

            ) 
          }
            }
export default SalaryGraph
