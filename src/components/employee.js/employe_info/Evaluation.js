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
  let type = props.type;
  console.log(type)
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

  if (empData === null)
    return (
      <div className="alert alert-danger alert-dismissible">
        <button type="button" className="close" data-dismiss="alert"></button>
        <div align="center">
          <strong>Ooopppsss !!! No data</strong>{" "}
        </div>
      </div>
    );

  const onSubmit = (data) => {
    setcircleloading(true)
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
            />
            {errors.evaluaterName && (
              <span className="text-danger">Evaluator name is required</span>
            )}
            <br></br>
            <label htmlFor="evaluaterName">Evaluator's Name</label>
          </div>
          <div className="form-group col-10 col-sm-10 col-md-8 col-lg-10 col-xl-10">
            <input
              type="text"
              name="evaluationNote"
              id="evaluationNote"
              ref={register({ required: true })}
            />
            <br></br>
            {errors.evaluationNote && (
              <span className="text-danger">Evaluator note is required</span>
            )}
            <br></br>
            <label htmlFor="evaluationNote">Evaluation Note</label>
          </div>
          <div className="form-group col-10 col-sm-10 col-md-8 col-lg-4 col-xl-4">
            <select
              class="form-control"
              name="evaluationType"
              ref={register({ required: true })}
            >
              <option value="Recommended">Recommended</option>
              <option value="Average">Average</option>
              <option value="Backlisted">Backlisted</option>
            </select>
            {errors.evaluationType && (
              <span className="text-danger">Evaluator type is required</span>
            )}
            <br></br>
            <label htmlFor="evaluationNote">Evaluation Note</label>
          </div>
          <div className="form-group ">
          
            <button className="btn primary  col-7 col-sm-7 col-md-5 col-lg-1 col-xl-1 ml-3">
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
