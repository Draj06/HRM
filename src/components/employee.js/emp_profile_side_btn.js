import React from 'react'

function emp_profile_side_btn(props) {
    const button_Data = [{"name":"Basic Information","value":"BasicInfo"},
    {"name":"Employee Position","value":"Emp_position"},
    {"name":"Salary","value":"emp_salary"},
    {"name":"ID","value":"emp_id"},
    {"name":"Bank","value":"bank"},
    {"name":"Educational Background","value":"education"},
    {"name":"Professional Background","value":"probackground"},
    {"name":"Exit Information","value":"exit_info"},
    {"name":"Evaluation","value":"evaluation"},]
    return (
        <div>
                {button_Data.map(item=>(
                 <div key={item.value}>
                <button 
                className="btn btn-outline-secondary mb-1 form-control text-left"
                value={item.value}
                onClick={props.trigerOnClickEmpSideBtn}
                >{item.name}</button>
                </div>
                ))}
                
                </div>
      
    )
}

export default emp_profile_side_btn
