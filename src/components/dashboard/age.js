import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {AGE_GRAPH}  from '../../queries'
import Loader from 'react-loader-spinner'
import { Chart } from "react-google-charts";


const Gender = ()=>{
  const {loading,error,data} = useQuery(AGE_GRAPH)
  if(loading) 
  return  <Loader 
  className="loaderCLassForGraph"
  type="ThreeDots"
  color="#0073e6"
  />
  
  if(error) return <div class="alert alert-danger alert-dismissible">
  <button type="button" class="close" data-dismiss="alert"></button>
  <div align="center"><strong>{error.message}</strong> </div>
</div>
  const header = [["Title", "Gender","All"]]
  const ageData = data.getAllEmpAgeRange.map(obj => Object.values(obj));
  const finatlAgeData = header.concat(ageData)
  
  
  const options = {
              title: "Age",
              pieHole: 0.4,
              is3D: true,
              language: 'hi_IN',
              legend: { position: 'bottom', alignment: 'end' },
           };
      return(
          <div className="App">
         <Chart
           chartType="PieChart"
           width="100%"
           height="400px"
           data={finatlAgeData}
           options={options}
         />
         
   </div>
 )
  
 }
export default Gender

