import React, { useState, useEffect } from "react";
import AddComp1 from "../../components/AddCompany/individually/addComp1";
import AddComp2 from "../../components/AddCompany/individually/addComp2";
import AddComp3 from "../../components/AddCompany/individually/addComp3";
import { useForm } from "react-hook-form";

function AddCompanyMain() {
  const {
    register,
    triggerValidation,
    errors,
    getValues
  } = useForm();
  const [defaultValues, setDefaultValues] = useState({});

  const forms = [
    {
      fields: ["uname", "age"], //to support multiple fields form
      component: (register, errors, defaultValues) => (
        <AddComp1
          register={register}
          errors={errors}
          defaultValues={defaultValues}
        />
      )
    },
    {
      fields: ["lname"],
      component: (register, errors, defaultValues) => (
        <AddComp2
          register={register}
          errors={errors}
          defaultValues={defaultValues}
        />
      )
    },
    {
      fields: ["company"],
      component: (register, errors, defaultValues) => (
        <AddComp3
          register={register}
          errors={errors}
          defaultValues={defaultValues}
        />
      )
    }
  ];

  const [currentForm, setCurrentForm] = useState(0);

  const moveToPrevious = () => {
    setDefaultValues(prev => ({ ...prev, [currentForm]: getValues() }));

    triggerValidation(forms[currentForm].fields).then(valid => {
      if (valid) setCurrentForm(currentForm - 1);
    });
  };

  const moveToNext = () => {
    console.log(getValues());
    setDefaultValues(prev => ({ ...prev, [currentForm]: getValues() }));
    triggerValidation(forms[currentForm].fields).then(valid => {
      if (valid) setCurrentForm(currentForm + 1);
    });
  };

  const prevButton = currentForm !== 0;
  const nextButton = currentForm !== 2;
  const handleSubmit = e => {
    const wholeFormData = { ...defaultValues, [currentForm]: getValues() };
    console.log("whole form data - ", JSON.stringify(wholeFormData));
  };
  const updateProgressBar = ()=>{
    return (100 / 3) * (currentForm+1)
  }
  console.log(updateProgressBar())
    return (
      <div>
         <div class="progress">
    <div class="progress-bar" style={{width:updateProgressBar()+"%"}}>{updateProgressBar().toFixed()+"%"}</div>
  </div> 

      {forms[currentForm].component(
        register,
        errors,
        defaultValues[currentForm]
      )}

      {prevButton && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={moveToPrevious}
        >
          back
        </button>
      )}
      {nextButton && (
        <button className="btn btn-primary" type="button" onClick={moveToNext}>
          next
        </button>
      )}

      {currentForm === 2 && (
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default AddCompanyMain;
