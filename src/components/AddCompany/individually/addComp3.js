import React from "react";
import { useForm } from "react-hook-form";

function Form3({ register, errors, defaultValues }) {
  // const { register, handleSubmit, errors } = useForm();
  return (
    <div>
      <form autocomplete="on">
        <br />
        <div className="form-group">
          <label>Company</label>
          <input
            defaultValue={defaultValues && defaultValues.company}
            type="text"
            name="company"
            ref={register({ required: true })}
          />
          {errors.company && <span>required</span>}
        </div>
      </form>
    </div>
  );
}

export default Form3;
