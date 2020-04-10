import React, { useState } from 'react'
import {Chart} from 'react-google-charts'
import { useQuery } from '@apollo/react-hooks';
import Modal from 'react-modal'
import Loader from 'react-loader-spinner'
import {SALARY_GRAPH_ONCLICK_DEPARTMENT } from "../../queries";


const Salary_Graph_dept=()=> {
  let month_year = localStorage.getItem('Month_Dept_salary')
  let d = month_year.split(' ')
  let month = d[0]
  let year = parseInt(d[1])
  
  const[modalIsOpen,setmodalIsOpen] = useState(false)

  const {error,loading,data} = useQuery(SALARY_GRAPH_ONCLICK_DEPARTMENT,{
        variables: { month,year },
      });

      if(error) return <div className="alert alert-danger alert-dismissible">
      <button type="button" className="close" data-dismiss="alert"></button>
      <div align="center"><strong>{error.message}</strong> </div>
    </div>

    if(loading) return <Loader 
    className="loaderCLassForGraph"
    type="ThreeDots"
    color="#0073e6"
    />
  
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
                setmodalIsOpen(true)
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
   const dataWIthoutType = data.getActiveDeptEmpAndSalaryDetailsBasedOnMonYear.map(item=>{
       return{
         dept_name:item.dept_name,
         ctc:item.ctc,
         gross:item.gross,
         variation:item.variation,
         count:item.count,
       }
     })
     const header = [["Department","CTC","Gross Salary","Variation of CTC","Total no. of employees"]]
     const dataArr = dataWIthoutType.map(obj => Object.values(obj))
     const finalData = header.concat(dataArr)
     console.log(dataArr)
     if(dataArr.length===0)
     {
        
         return <div className="alert alert-danger alert-dismissible">
         <button type="button" className="close" ></button>
         <div align="center"><strong>OOoopss !!</strong> No data for the selected fields</div>
       </div>
     }
     else{

       return (
           <div className="container-fluid">
        <Chart
         chartType="LineChart"
         width="100%"
         height="350px"
         data={finalData}
         options={options}
         
         chartEvents={chartEvents}
         
       />
     <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setmodalIsOpen(false)}>
            <div 
            className="modalLingment"
            align="right">
            <span
             onClick={()=>setmodalIsOpen(false)}
            >
            <i className="fas fa-times fa-2x"></i>
            </span>
            </div>
            <div>
              <button
              className="btn btn-outline-dark modalHeader text-capitalize">Active Employees</button> 
            </div>
            <hr></hr>
          </Modal>

           </div>
       )
     }
    
}

export default Salary_Graph_dept