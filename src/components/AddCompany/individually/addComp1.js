import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function Form1({ register, errors, defaultValues }) {
  // const { register, handleSubmit, errors, triggerValidation } = useForm();
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <form autocomplete="on">
        <br />
        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            defaultValue={defaultValues && defaultValues.uname}
            name="uname"
            ref={register({ required: true })}
          />
          {errors.uname && <span>required</span>}
          <input
            type="text"
            defaultValue={defaultValues && defaultValues.age}
            name="age"
            ref={register({ required: true })}
          />
          {errors.age && <span>required</span>}
        </div>
      </form>
    </div>
  );
}

export default Form1;
