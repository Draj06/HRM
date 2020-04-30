import React, { useState } from 'react'
import Add1 from '../../components/AddCompany/individually/add1'
import Add2 from '../../components/AddCompany/individually/add2'
import Add3 from '../../components/AddCompany/individually/add3'

function AddCompanyMain() {
    const [currState,setCurrState] = useState(1)
    const [allState,setAllstate] = useState(3)

    const moveToPrevious=()=>{
        setCurrState(currState -1)
    }
    const moveToNext=()=>{
        setCurrState(currState + 1)
    }
   const progressBar =()=>{
       return (100/allState) * currState
   }


    return (
        <div>

<div class="progress">
  <div class="progress-bar" style={{width:progressBar()+"%"}}>70%</div>
</div> 

            {currState===1 && <Add1 />}
            {currState===2 && <Add2 />}
            {currState===3 && <Add3 />}

            {currState!==1 && <button className="btn btn-primary"
            onClick={moveToPrevious}
            >back</button>}
            {currState!==allState &&<button className="btn btn-primary"
            onClick={moveToNext}
            >next</button>}

            {currState ===3 &&<button className="btn btn-primary"
            
            >Done</button>}                 
        </div>



    )
}

export default AddCompanyMain
