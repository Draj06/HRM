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
             
              language: 'hi_IN',
              is3D:true,
              legend: {
                maxLines: 5,
                textStyle: {
                  fontSize: 12
                },
                position: 'top',
                alignment: 'start'
              },
              chartArea:{left:10,top:50,width:"75%",height:"100%"},
              colors: ['#e9ebf7',"#4e7fcc","#0a367a","#ffef4f","#c38d00","#fbbd05"],
              
           };
      return(
          <div className="App">
            <div className="graphHeading"> Religion</div>
            <hr />
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

