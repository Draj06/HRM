import React from "react";
import { useForm } from "react-hook-form";

function Form2({ register, errors, defaultValues }) {
  // const { register, handleSubmit, errors } = useForm();
  return (
    <div>
      <form autocomplete="on">
        <br />
        <div className="form-group">
          <label>User last name</label>
          <input
            defaultValue={defaultValues && defaultValues.lname}
            type="text"
            name="lname"
            ref={register({ required: true })}
          />
          {errors.lname && <span>required</span>}
        </div>
      </form>
    </div>
  );
}

export default Form2;
