import React, { Component } from 'react'
import ManpowerGraph from '../../components/dashboard/manpowerGraph'
import SalaryGraph from '../../components/dashboard/salaryGraph'
import AgeChart from '../../components/dashboard/age'
import LocationChart from '../../components/dashboard/location'
import ReligionChart from '../../components/dashboard/religion'
import GenderChart from '../../components/dashboard/gender'
import '../../Styles/dashboard.css'

export default class dashboard extends Component {
    render() {
      
        return (
          <div className="container-fluid">
           
            <div className="row">
             
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 div_divide">
               
              <ManpowerGraph />
              </div>
            
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 div_divide">
              
              <SalaryGraph />
            </div>
            </div>
            <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 div_divide">
            <AgeChart />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 div_divide">
            
            <ReligionChart />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 div_divide">
              <GenderChart />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 div_divide">
              <LocationChart />
            </div>
           </div>
           </div>
           
        )
    }
}
