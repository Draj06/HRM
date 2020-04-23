import React,{useState} from 'react'
import Buttons from '../../components/employee.js/emp_profile_side_btn'
import EmpBasicInfo from '../../components/employee.js/employe_info/emp_basic_info'
import EmpPosition from '../../components/employee.js/employe_info/emp_position'
import Salary from '../../components/employee.js/employe_info/Salary'
import Id from '../../components/employee.js/employe_info/Id'
import Bank from '../../components/employee.js/employe_info/Bank'
import EducationalBackground from '../../components/employee.js/employe_info/EducationalBackground'
import ProffBackground from '../../components/employee.js/employe_info/ProffBackground'
import ExitInfo from '../../components/employee.js/employe_info/ExitInfo'
import Evaluation from '../../components/employee.js/employe_info/Evaluation'


const Emp_profile =()=> {
    
    const [activeTab, setActiveTab] = useState("BasicInfo");
    const onSideBtnClick=(e)=>{
        setActiveTab(e.target.value)
    } 
    return (
        <div className="container-fluid">
            <h5 className="headingEmploye">Employee Profile</h5>
            <hr />
            <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 mt-1">
                <Buttons trigerOnClickEmpSideBtn={onSideBtnClick}/>
            </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-10 col-xl-10 mt-1">
                {activeTab === "BasicInfo" && <EmpBasicInfo type="BasicInfo"/>}
                {activeTab === "Emp_position" && <EmpPosition type="Emp_position"/>}
                {activeTab === "emp_salary" && <Salary type="emp_salary"/>}
                {activeTab === "emp_id" && <Id type ="emp_id"/>}
                {activeTab === "bank" && <Bank type="bank"/>}
                {activeTab === "education" && <EducationalBackground type="education"/>}
                {activeTab === "probackground" && <ProffBackground type="probackground"/>}
                {activeTab === "exit_info" && <ExitInfo type="exit_info"/>}
                {activeTab === "evaluation" && <Evaluation type="evaluation"/>}

                </div>
            </div>
        </div>
    )
}
export default Emp_profile
