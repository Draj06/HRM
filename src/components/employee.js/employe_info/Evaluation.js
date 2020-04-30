import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { GET_EMP_Evaluation } from "../../../queries";
import { ADD_EVALUATION } from "../../../mutations";
import EvaluationComp from "./evaluationData";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { ToastContainer, toast } from 'react-toastify';

const Evaluation = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [disabled, setdisabled] = useState(false);
  let type = props.type;
  let id = localStorage.getItem("emp_Id");
  const { error, loading, data } = useQuery(GET_EMP_Evaluation, {
    variables: { type, id },
  });
  const [addEmployeeEvaluationInfo, result] = useMutation(ADD_EVALUATION,{
    refetchQueries: [
      {
        
        query: GET_EMP_Evaluation,
        variables: { type,id }
      }
    ]
  });
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [circleloading,setcircleloading] = useState(false)

  if (loading)
    return (
      <Loader
        className="loaderCLassForGraph"
        type="ThreeDots"
        color="#0073e6"
      />
    );

  if (error)
    return (
      <div className="alert alert-danger alert-dismissible">
        <button type="button" className="close" data-dismiss="alert"></button>
        <div align="center">
          <strong>{error.message}</strong>{" "}
        </div>
      </div>
    );

  let empData = data.getEmployeeEvaluationInfo;

  if(empData===null || empData==="" || empData.length===0)
     return(

    <div className="alert alert-warning alert-dismissible">
        <button type="button" className="close" data-dismiss="alert"></button>
        <div align="center">
          <strong>Ooopppsss !!! No data</strong>{" "}
        </div>
      </div>
     )

  const onSubmit = (data) => {
    setcircleloading(true)
    setdisabled(true);
    let { evaluaterName, evaluationNote, evaluationType } = data;
    console.log(evaluaterName + ":" + evaluationNote + ":" + evaluationType);
    addEmployeeEvaluationInfo({
      variables: { id, evaluaterName, evaluationNote, evaluationType },
    });

    console.log(result);
    toast.success( 'Evaluation updated sucessfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
      });
    setcircleloading(false)
    setmodalIsOpen(false)
  };

  return (
    <div className="container-fluid">
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
    />
{/* Same as */}
<ToastContainer />
      <div className="form-group col-10 col-sm-10 col-md-8 col-lg-3 col-xl-3">
        <button className="btn white_color_btn" 
        onClick={() => setmodalIsOpen(true)}
        >

        <i className="fas fa-plus fa-xl"></i> Add Evaluation
           </button>
      </div>
      {empData.map((item) => (
        <EvaluationComp item={item} />
      ))}

      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setmodalIsOpen(false)}
      >
        <div>
          <div className="modalLingment" align="right">
            <span onClick={() => setmodalIsOpen(false)}>
              <i className="fas fa-times fa-2x"></i>
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group col-10 col-sm-10 col-md-8 col-lg-4 col-xl-4">
            <input
              type="text"
              name="evaluaterName"
              id="evaluaterName"
              ref={register({ required: true })}
              className={errors.evaluaterName ? "inputColorLine" : ""}
            />
            {errors.evaluaterName && (
              <span className="inputTextError">Evaluator name is required</span>
            )}
            <br></br>
            <label htmlFor="evaluaterName">Evaluator's Name</label>
          </div>
          <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input
              type="text"
              name="evaluationNote"
              id="evaluationNote"
              className={errors.evaluationNote ? "inputColorLine" : ""}
              ref={register({ required: true })}
            />
            
            {errors.evaluationNote && (
              <span className="inputTextError">Evaluator note is required</span>
            )}
            <br></br>
            <label htmlFor="evaluationNote">Evaluation Note</label>
          </div>
          <div className="form-group col-10 col-sm-10 col-md-8 col-lg-4 col-xl-4">
            <select
              
              name="evaluationType"
              className={errors.evaluationType ? "inputColorLine form-control" : "form-control"}
              ref={register({ required: true })}
            >
              <option value="Recommended">Recommended</option>
              <option value="Average">Average</option>
              <option value="Backlisted">Backlisted</option>
            </select>
            {errors.evaluationType && (
              <span className="inputTextError">Evaluator type is required</span>
            )}
            <br></br>
            <label htmlFor="evaluationNote">Evaluation Note</label>
          </div>
          <div className="form-group ">
          
            <button className="btn primary  col-7 col-sm-7 col-md-5 col-lg-1 col-xl-1 ml-3"
            disabled={disabled ? "disabled" : ""}
            >
            {circleloading && (
            <span class="spinner-border float-left"></span>
          )}
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Evaluation;
