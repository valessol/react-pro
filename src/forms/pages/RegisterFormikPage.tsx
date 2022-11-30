import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

interface FormValues {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export const RegisterFormikPage = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    password1: "",
    password2: "",
  };

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{ ...initialValues }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe contener al menos 2 letras")
            .max(15, "Debe contener como máximo 15 caracteres")
            .required("Campo requerido"),
          email: Yup.string()
            .email("Formato inválido")
            .required("Campo requerido"),
          password1: Yup.string()
            .min(6, "Debe contener al menos 6 caracteres")
            .required("Campo requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no coinciden")
            .required("Campo requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <Field name="name" type="text" placeholder="Nombre" />
            <ErrorMessage name="name" component="span" />

            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />

            <Field name="password1" type="password" placeholder="Password" />
            <ErrorMessage name="password1" component="span" />

            <Field
              name="password2"
              type="password"
              placeholder="Repetir Password"
            />
            <ErrorMessage name="password2" component="span" />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
