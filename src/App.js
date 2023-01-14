import React from "react";
// TODO: import useFormik from formik library
import { useFormik, validateYupSchema } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert('Successful Login');
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = 'required field';
      if (!values.password) errors.password = 'required field';
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input
        id="emailField"
        type="text"
        name="email"
        onChange={formik.handleChange}
        value={formik.value.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red"}}>
            {formik.errors.email}
          </div>
        ):null}

        <div>Password:</div>
        <input 
        id="passwordField"
        type="text"
        name="password"
        oncChange={formik.handleChange}
        value={formik.value.password}
        />
        {formik.errors.password ? (
          <div id="passwordError" style={{ color: "red"}}>
            {formik.errors.password}
          </div>
        ):null}
        
      </form>
    </div>
  );
}


export default App;
