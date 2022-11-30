import React from "react";
import "../styles/styles.css";
import { useFormik, FormikErrors } from "formik";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.firstName) errors.firstName = "Required";
    else if (values.firstName.length > 15)
      errors.firstName = "Must be 15 characters or less";

    if (!values.lastName) errors.lastName = "Required";
    else if (values.lastName.length > 10)
      errors.lastName = "Must be 10 characters or less";

    if (!values.email) errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = "Invalid email address";

    return errors;
  };

  // El useFormik se tiene que inicializar con un objeto de la siguiente forma
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  return (
    <div>
      <form action="" noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {/* touched me dirá si el campo ha sido tocado, y si lo ha sido y hay error, se mostrará el span */}
        {/* touched por si solo no hará esto, ya que no hay un evento onChange que dispare el validate cuando solamente se ingresa al campo y no se escribe nada */}
        {/* para esto, se necesita escuchar el evento onBlur */}
        {touched.firstName && errors.firstName ? (
          <span>{errors.firstName}</span>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName ? (
          <span>{errors.lastName}</span>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email ? <span>{errors.email}</span> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
