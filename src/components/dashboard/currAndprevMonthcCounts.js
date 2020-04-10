import React, {useState } from 'react'
import '../../Styles/dashboard.css'
import Modal from 'react-modal'
import Loader from 'react-loader-spinner'
import {MANPOWER_CURR_PREV_MONTH_COUNT,MANPOWER_OVERBOARD_ON_CLICK} from '../../queries'
import { useQuery} from '@apollo/react-hooks'
import { ToastContainer, toast } from 'react-toastify';




const CurrAndprevMonthcCounts =() =>{
  const[modalIsOpen,setmodalIsOpen] = useState(false)
  const[status,setStatus] = useState('')
  const[month,setMonth] = useState('')
  const[year,setYear] = useState(1)


const result1 = useQuery(MANPOWER_CURR_PREV_MONTH_COUNT)
const result2 = useQuery(MANPOWER_OVERBOARD_ON_CLICK,{
  variables: { month,year,status },
});

const capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
if(result1.error) return <div class="alert alert-danger alert-dismissible">
<button type="button" class="close" data-dismiss="alert"></button>
<div align="center"><strong>{result1.error.message}</strong> </div>
</div>
if(result1.loading) return <Loader 
className="loaderCLassForGraph"
type="ThreeDots"
color="#0073e6"
/>
 const modalClick = (e)=>
  {
    let Month_year = e.target.attributes[0].value || e.target.value
    
    console.log(Month_year)
    let month_year_status = Month_year.split(':')
    
    let sepStatusDate = month_year_status[1].split(' ')
    if(sepStatusDate[0]==="April")
    {
      let month = sepStatusDate[0]
      let yearVal = parseInt(sepStatusDate[1])
      let statusM = month_year_status[0]
      console.log(sepStatusDate)
      setMonth(month)
      setYear(yearVal)
      setStatus(capitalizeFirstLetter(statusM))
      setmodalIsOpen(true)
      

        toast.error("something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
          });
      
    }
    else{
      let month = sepStatusDate[0]
      let yearVal = parseInt(sepStatusDate[1])
      let statusM = month_year_status[0]
          
          setMonth(month)
          setYear(yearVal)
          setStatus(capitalizeFirstLetter(statusM))
         // console.log(yearVal+":"+month+":"+statusM)
         toast.error("something wentr wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
          });
          setmodalIsOpen(true)
          
    }
  }
   

  const MonthData = ({
    arrive,
    arriveLabel,
    exit,
    exitLabel,
    totalEmployees,
    month
  }) => (
    <div className="container-fluid">
      <label 
  
      className="monthYr" align="left">
        {month}
      </label>
      <div className="row countDiv">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 total">
          <label className="totalHeading">Total</label>
          <div className="totalCount">{totalEmployees}</div>
        </div>
  
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <button 
          onClick={modalClick}
          value={arriveLabel+":"+month}
          className="btn btn-outline-secondary  form-control text-capitalize">
            {arriveLabel}
            <span 
            value={arriveLabel+":"+month}
            className="badge badge-pill badge-primary">{arrive}</span>
          </button>
          <button 
            onClick={modalClick}
            value={exitLabel+":"+month}

            className="btn btn-outline-secondary form-control text-capitalize">
            {exitLabel}
            <span
             value={exitLabel+":"+month}
            className="badge badge-pill badge-primary">{exit}</span>
          </button>
        </div>
      </div>
      <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnVisibilityChange
                  draggable
                  pauseOnHover
                  />
                  {/* Same as */}
              <ToastContainer />
    </div>
  );
  
    const { current_month, previous_month } = result1.data.getCurPrevMonthEmps;
  
   if(!modalIsOpen)
   {

     return (
       
         
          <div className="row container-fluid">

     <div className="form-control graphHeading"> Manpower Graph</div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div className="row widthContainer">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <MonthData
            arrive={previous_month.arrived}
            totalEmployees={previous_month.total_employes}
            arriveLabel="arrived"
            exit={previous_month.exited}
            exitLabel="exited"
            month={previous_month.previous_month}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <MonthData
            arrive={current_month.ariving}
            arriveLabel="arriving"
            totalEmployees={current_month.total_employes}
            exit={current_month.exiting}
            exitLabel="exiting"
            month={current_month.current_month}
          />
        </div>
      </div>
    </div>
    </div> 
      )
   }
        else
        {
          if(result2.error) return (<div className="row container-fluid">
                
              
          <div className="form-control graphHeading"> Manpower Graph</div>
         <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
           <div className="row widthContainer">
             <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <MonthData
                 arrive={previous_month.arrived}
                 totalEmployees={previous_month.total_employes}
                 arriveLabel="arrived"
                 exit={previous_month.exited}
                 exitLabel="exited"
                 month={previous_month.previous_month}
               />
             </div>
             <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <MonthData
                 arrive={current_month.ariving}
                 arriveLabel="arriving"
                 totalEmployees={current_month.total_employes}
                 exit={current_month.exiting}
                 exitLabel="exiting"
                 month={current_month.current_month}
               />
             </div>
           </div>
         </div>
         </div> 
          )
        if(result2.loading) return <Loader 
        className="loaderCLassForGraph"
        type="ThreeDots"
        color="#0073e6"
        />
        let finalData = result2.data.getOverBoardEmpBasedOnMonthYearStatus
        console.log(finalData.length)
        
        
        return(
          <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setmodalIsOpen(false)}>
                  <div>
                    
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
                    className="btn btn-outline-dark modalHeader text-capitalize">{status}</button> 
                  </div>
                  <hr></hr>
                  <table className="table table-hover table-bordered">
                      <thead className="table-secondary">
                        <tr>
                          <th>Employee Name</th>
                          <th>Employee Department Name</th>
                          <th>Employee Position Name</th>
                          <th>Employee Gender</th>
                          <th>Employee Tentative DOJ</th>
                          <th>Employee DOJ</th>
                          <th>Employee Tentative DOE</th>
                          <th>Employee DOE</th>

                        </tr>
                      </thead>
                      <tbody>
                        {finalData.map(item=>(
                           <tr>
                           <td>{item.emp_name}</td>
                           <td>{item.emp_dept_name}</td>
                           <td>{item.emp_position_name}</td>
                           <td>{item.emp_gender}</td>
                           <td>{item.emp_tentative_doj || "-"}</td>
                           <td>{item.emp_doj}</td>
                           <td>{item.emp_tentative_doe || "-"}</td>
                           <td>{item.emp_doe}</td>
                         </tr>
                        ))}
                        
                      </tbody>
                  </table>
                  </div>
                </Modal>
        )
        
        }
        

}



export default CurrAndprevMonthcCounts
