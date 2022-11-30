import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/MyTextInput";
import MySelect from "../components/MySelect";
import MyCheckbox from "../components/MyCheckbox";

const FormikAbstract = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().required("Requerido").email("Formato inválido"),
          terms: Yup.boolean().oneOf(
            [true],
            "Los terminos y condiciones son obligatorios"
          ),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="fisrtName"
              placeholder="First Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="Email"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstract;
