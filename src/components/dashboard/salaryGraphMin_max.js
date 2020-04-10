import React, { useState } from 'react'
import {Chart} from 'react-google-charts'
import Modal from 'react-modal'
const Salary_Dept_Min_Max=()=> {
    const[modalIsOpen,setmodalIsOpen] = useState(false)
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

      
    const data = [
      ["Departments", "Min Salary", "Max Salary", "Avg Salary", "Total No of Employes"],
      ["Dep 1", 100, 270, 100, 2],
      ["Dep 2", 300, 240, 800, 8],
      ["Dep 3", 500, 370, 700, 3],
      ["Dep 4", 600, 170, 500, 4],
      ["Dep 5", 400, 170, 500, 6],
      ["Dep 6", 450, 170, 500, 8]
    ];

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
            var parts = e.targetID.split("#");
            if (parts.indexOf("label") >= 0) {
              let idx = parts[parts.indexOf("label") + 1];
                idx = parseInt(idx);
                //var onClickData = finalData[idx + 1][0]
                
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


        return (
            <div className="container-fluid">
         <Chart
          chartType="LineChart"
          width="100%"
          height="350px"
          data={data}
          options={options}
          chartEvents={chartEvents}
          legendToggle
          
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

export default Salary_Dept_Min_Max