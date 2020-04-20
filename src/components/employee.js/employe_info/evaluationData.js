import React,{useState} from 'react'

const EvaluationData=({item})=> {
    const[visible,setvisible] = useState(true)
    const onClickEdit = () => {
        setvisible(false);
      };
      const cancelOnClick = () => {
        setvisible(true);
      };
    return (
        <div>
  <div>
    <div className="row">
      <div className="form-group col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5">
        <input
          type="text"
          disabled
          id="Name_of_the_evaluator"
          value={item.Name_of_the_evaluator}
        />
        <br />
        <label htmlFor="Name_of_the_evaluator" className="labelEmploye">
          Name of the evaluator
        </label>
      </div>
    </div>
    <div className="row">
      <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <input
          type="text"
          disabled
          id="Enter_employee_note_here"
          value={item.Enter_employee_note_here}
        />
        <br />
        <label htmlFor="Enter_employee_note_here" className="labelEmploye">
          Enter employee's evaluation note here
        </label>
      </div>
    </div>
    {visible ? (
      <div className="row">
        <div className="form-group col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <input type="text" disabled id="Evaluation" value={item.Evaluation} />
          <br />
          <label htmlFor="Evaluation" className="labelEmploye">
            Evaluation
          </label>

          <div className="form-group mt-2">
            <button
              className="btn btn-primary form-control col-5 col-sm-5 col-md-3 col-lg-2 col-xl-2"
              onClick={onClickEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="row">
        <div className="form-group col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <select className="form-control">
            <option>1</option>
            <option>2</option>
          </select>

          <button 
          onClick={cancelOnClick}
          className="btn btn-warning form-control col-5 col-sm-5 col-md-3 col-lg-2 col-xl-2 m-2">
            Cancel
          </button>
          <button className="btn btn-success form-control col-5 col-sm-5 col-md-3 col-lg-2 col-xl-2 m-2">
            Save
          </button>
        </div>
      </div>
    )}
  </div>
  <hr />
</div>

    )
}

export default EvaluationData
