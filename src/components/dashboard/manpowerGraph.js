import React, { useState } from 'react'
import '../../Styles/dashboard.css'
import ManpowerDept from '../dashboard/mappowerDeptVsCount'
import CurPrevMonth from '../dashboard/currAndprevMonthcCounts'
import ManpowerClickOverboard from '../../components/dashboard/manpower_onChange_Overboard'
import {useQuery} from '@apollo/react-hooks'
import {MANPOWER_GRAPH_MONTH}  from '../../queries/index'
import Loader from 'react-loader-spinner'
import { Chart } from "react-google-charts";

const ManpowerGraph =()=>{
    
  const {error,loading,data} = useQuery(MANPOWER_GRAPH_MONTH)
  const[childVisible,setchildVisible] = useState(false)
  const[deptVisible,setdeptVisible] = useState(false)
  
  
  if(loading) return  <Loader 
  className="loaderCLassForGraph"
  type="ThreeDots"
  color="#0073e6"
  />

  
    if(error) return <div class="alert alert-danger alert-dismissible">
    <button type="button" class="close" data-dismiss="alert"></button>
    <div align="center"><strong>{error.message}</strong> </div>
  </div>
  
     const dataWIthoutType = data.getDashboardManpowerActiveCount.map(item=>{
       return{
         mon_year:item.mon_year,
         count:item.total_count
       }
     })
     const header = [["Title", "Total No of Employes"]]
     const dataArr = dataWIthoutType.map(obj => Object.values(obj))
     const finalData = header.concat(dataArr)
    
 
     const chartEvents=[
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
               
                localStorage.removeItem("month_manpower_graph")
                localStorage.setItem("month_manpower_graph",onClickData)
                
                setchildVisible(!childVisible)
                
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
    ]
  const btnClick =()=>{
       setchildVisible(false)
       setdeptVisible(false)
      }
      const options = {
        
        curveType: "function",
        legend: { position: "bottom" },
        enableInteractivity: true,
        hAxis: { textStyle: { color: "green", underline: true,bold:"1000" } },
        vAxis: {
          title: 'Total Employee'
        },
        colors: ['#66a3ff'],
      };
     

if(!childVisible)
{
 
  return (
      
      <div className="manpowerChart">
       <CurPrevMonth />
        {
          
    deptVisible ?   
    <div>
       <span 
       onClick={btnClick}
       className="btn btn-outline-success"><i className="fas fa-backward "></i></span>      
    <ManpowerDept  /> 
    </div>
    :
      <Chart
        width={'99%'}
        height={'350px'}
        chartType="ColumnChart"
        data={finalData}
        options={options}
        chartEvents={chartEvents}
        legendToggle
        
      />
        }
       
      </div>
  )
  
}
return (
  <div className="manpowerChart">
       <ManpowerClickOverboard  /> 
        {
          
    childVisible ?   
    <div>
       <span 
       onClick={btnClick}
       className="btn btn-outline-success"><i className="fas fa-backward "></i></span>      
    <ManpowerDept  /> 
    </div>
    :
      <Chart
        width={'99%'}
        height={'350px'}
        chartType="ColumnChart"
        data={finalData}
        options={options}
        chartEvents={chartEvents}
        
      />
        }
       
      </div>
)
}
 export default ManpowerGraph 
