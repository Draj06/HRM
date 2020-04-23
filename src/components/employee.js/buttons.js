import React from "react";

const Button = props => {
   const clickHandler = () => {
      props.setActiveButton(props.id)
   }
   return (
      <button
         className={`btn ${props.active ? 'btn-success' : null}
          btn-outline-secondary mb-1 form-control text-left`}
         value={props.value}
         onClick={clickHandler} >

         {props.value}

      </button>
   )

}

export default Button