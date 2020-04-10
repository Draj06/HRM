import React from 'react'
import '../../Styles/dashboard.css'
import Loader from 'react-loader-spinner'
import {SALARY_OVERBOARD_FIRRST_LOAD} from '../../queries'
import { useQuery} from '@apollo/react-hooks'
import { ToastContainer, toast } from 'react-toastify';

const SalaryuCount =()=>  {
  const numDifferentiation=(val)=> {
    if(val >= 10000000) val = (val/10000000).toFixed(2) + ' Cr';
    else if(val >= 100000) val = (val/100000).toFixed(2) + ' L';
    else if(val >= 1000) val = (val/1000).toFixed(2) + ' K';
    return val;
}
  const {error,loading,data} = useQuery(SALARY_OVERBOARD_FIRRST_LOAD)
  
  if(error) return <div class="alert alert-danger alert-dismissible">
<button type="button" class="close" data-dismiss="alert"></button>
<div align="center"><strong>{error.error.message}</strong> </div>
</div>

if(loading)  return <Loader 
className="loaderCLassForGraph"
type="ThreeDots"
color="#0073e6"
/>


  const MonthData = ({
    ctc,
    ctcLabel,
    variation,
    variationLabel,
    gross,
    month,
    percent
  }) => (
    <div className="container-fluid">
      <label 
      className="monthYr" align="left">
        {month}
      </label>
      <div className="row countDiv">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 total">
          <label className="totalHeading">Gross</label>
          <div className="totalCount">{gross}</div>
        </div>
  
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          
          <div className="form-control">{ctcLabel+": "+ctc}
          </div>
          <div className="variation">
                  {variationLabel+": "+variation+"("+percent+"%)"}
              </div>
        </div>
      </div>
    </div>
  );
  const { current_month, previous_month } = data.getCurandPreMonthSalaryStatusOverBoard;

  let variationCurr = current_month.variation
  let variationPrev = previous_month.variation
  let currGross = current_month.gross
  let currCTC = current_month.ctc
  let Percentage = ((currGross-currCTC)/currGross)*100
  let positiveVarCur = 0
  let positiveVarPrev = 0
  let minusVarCur = 0 
  let minusVarPrev = 0 
  
  if(variationCurr<0)
  {
    positiveVarCur =numDifferentiation(Math.abs(variationCurr))
    minusVarCur ="-"+positiveVarCur
  }
  else
  {
    minusVarCur = numDifferentiation(current_month.variation)
  }
  if(variationPrev<0)
  {
    positiveVarPrev =numDifferentiation(Math.abs(variationCurr))
    minusVarPrev ="-"+positiveVarPrev
  }
  else
  {
    minusVarPrev = numDifferentiation(previous_month.variation)
  }
  

        return (
            <div className="row container-fluid">
            
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
           <div className="row widthContainer">
             <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <MonthData
                 ctc={numDifferentiation(previous_month.ctc)}
                 gross={numDifferentiation(previous_month.gross)}
                 ctcLabel="CTC"
                 
                 variation={minusVarPrev}
                 variationLabel="Var"
                 month={previous_month.mon_year}
                 percent={Percentage}
               />
             </div>
             <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <MonthData
                 ctc={numDifferentiation(current_month.ctc)}
                 ctcLabel="CTC"
                 gross={numDifferentiation(current_month.gross)}
                 variation={minusVarCur}
                 variationLabel="Var"
                 month={numDifferentiation(current_month.mon_year)}
                 percent={Percentage}
               />
             </div>
           </div>
         </div>
           
          </div> 
               
            
        )
    }

export default SalaryuCount