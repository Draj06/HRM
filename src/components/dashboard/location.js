import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import Loader from 'react-loader-spinner'
import {LOCATION_GRAPH} from '../../queries'
import { Chart } from "react-google-charts";


const Location = ()=>{
  const {loading,error,data} = useQuery(LOCATION_GRAPH)
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
  

  const header = [["Title", "Location","All"]]
  const locationsData = data.getAllEmpLocation.map(obj => Object.values(obj));
  const finalLocationData = header.concat(locationsData)
  
  const options = {
              pieHole: 0.4,
              is3D: true,
              language: 'hi_IN',
              legend: { position: 'bottom', alignment: 'end' },
           };
      return(
          <div className="container-fluid">
            <div className="form-control graphHeading"> Location</div>
         <Chart
           chartType="PieChart"
           width="100%"
           height="400px"
           data={finalLocationData}
           options={options}
         />
         
   </div>
 )
  
 }
export default Location


