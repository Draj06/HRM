import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {RELEGION_GRAPH}  from '../../queries'
import Loader from 'react-loader-spinner'
import { Chart } from "react-google-charts";


const Religion = ()=>{
  const {loading,error,data} = useQuery(RELEGION_GRAPH)
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

  const header = [["Title", "Religion","All"]]
  const religionData = data.getAllEmpReligionGroup.map(obj => Object.values(obj));
  const finalReligionData = header.concat(religionData)
  
  const options = {
              pieHole: 0.4,
              is3D: true,
              language: 'hi_IN',
              legend: { position: 'bottom', alignment: 'end' },
           };
      return(
          <div className="App">
            <div className="form-control graphHeading"> Religion</div>
         <Chart
           chartType="PieChart"
           width="100%"
           height="400px"
           data={finalReligionData}
           options={options}
         />
         
   </div>
 )
  
 }
export default Religion

