import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
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
        <input type="text" {...getFieldProps("firstName")} />
        {/* getFieldsProps devuelve cada uno de los atributos necesarios como name, onBlur, onChange y value */}
        {touched.firstName && errors.firstName ? (
          <span>{errors.firstName}</span>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName ? (
          <span>{errors.lastName}</span>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email ? <span>{errors.email}</span> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
