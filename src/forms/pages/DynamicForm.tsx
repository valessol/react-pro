import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

export const DynamicForm = () => {
  const getInitialValues = (): { [key: string]: any } => {
    const initialValues: { [key: string]: any } = {};
    for (const input of formJson) {
      initialValues[input.name] = input.value;
    }
    return initialValues;
  };

  const getValidationSchema = () => {
    const requiredFields: { [key: string]: any } = {};

    formJson.forEach((input: { [key: string]: any }) => {
      const hasValidation = Boolean(input.validations);

      if (!hasValidation) return;

      let schema = Yup.string();
      if (input.validations?.required) {
        schema = schema.required("Este campo es obligatorio");
      }
      if (input.validations?.max) {
        schema = schema.max(
          input.validations?.max,
          `Debe tener ${input.validations?.max} caracteres como máximo`
        );
      }
      if (input.validations?.min) {
        schema = schema.min(
          input.validations?.min,
          `Debe tener ${input.validations?.min} caracteres como mínimo`
        );
      }
      if (input.validations?.email) {
        schema = schema.email("El formato de correo electrónico no es válido");
      }

      requiredFields[input.name] = schema;
    });

    return Yup.object({ ...requiredFields });
  };

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={getInitialValues()}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "select") {
                const selectOptions = options?.map((option: any) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ));
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value={0}>Select an option</option>
                    {selectOptions}
                  </MySelect>
                );
              } else if (type === "checkbox") {
                return <MyCheckbox key={name} label={label} name={name} />;
              } else {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
