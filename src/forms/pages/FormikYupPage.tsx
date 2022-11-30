import React from "react";
import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikYupPage = () => {
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
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("Requerido"),
        lastName: Yup.string()
          .max(10, "Debe tener 10 caracteres o menos")
          .required("Requerido"),
        email: Yup.string().required("Requerido").email("Formato inválido"),
      }),
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
        {touched.firstName && errors.firstName ? (
          <span>{errors.firstName}</span>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
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
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email ? <span>{errors.email}</span> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
