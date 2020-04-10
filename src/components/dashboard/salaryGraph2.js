import React, { useState } from 'react'
import '../../Styles/dashboard.css'
import SalaryDeptMinMaxGraph from '../dashboard/salaryGraphMin_max'

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
  language: 'hi_IN',
};


const SalaryGraph2 =()=>{
  const[deptVisible,setdeptVisible] = useState(false)
  const {error,loading,data} = useQuery(SALARY_GRAPH1)

    if(error) return <div class="alert alert-danger alert-dismissible">
    <button type="button" class="close" data-dismiss="alert"></button>
    <div align="center"><strong>{error.message}</strong> </div>
  </div>

    if(loading) return <Loader 
    className="loaderCLassForGraph"
    type="ThreeDots"
    color="#0073e6"
    />
 
     const data1 = [
        ["Salary Graph2", "Min Salary", "Max Salary", "Avg Salary", "Total No of Employes"],
        ["May 2019", 15000, 50000, 30000, 5],
        ["Jun 2019", 12000, 80000, 25000, 5],
        ["July 2019",18000, 65000, 28000, 3],
        ["Aug 2019", 17000, 55000, 34000, 4],
        ["Sept 2019",12000, 40000, 42000, 2],
        ["Oct 2019", 13000, 55000, 40000, 8],
        ["Nov 2019", 15000, 62000, 65000, 7],
        ["Dec 2019", 15000, 40000, 48200, 3],
        ["Jan 2020", 14000, 50000, 45600, 8],
        ["Feb 2020", 14000, 45600, 46500, 8],
        ["March 2020", 14000,70000, 50568, 8],
        ["April 2020", 14000, 65000, 54560, 8],

      ];
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
     
      const btnClick =()=>{
        setdeptVisible(false)
       }
              return (
                <div>
                {
                
                deptVisible ?   
                <div>
                   <span 
                   onClick={btnClick}
                   className="btn btn-outline-success"><i className="fas fa-backward "></i></span>      
                <SalaryDeptMinMaxGraph  /> 
                </div>
                :
                <div className="salaryGraph">
                
                <Chart
                chartType="LineChart"
                width="100%"
                height="350px"
                data={data1}
                options={options}
                chartEvents={chartEvents}
                legendToggle
    
                />
                
                </div>
                    }
                </div>
            
    
                ) 
            
            
            }
export default SalaryGraph2
