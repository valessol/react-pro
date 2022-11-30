import React from "react";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeolder?: string;
  [x: string]: any;
}

const MyTextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  // field devuelve las propiedades como onBlur, onChange, value y name... los controles de formik
  // meta contiene la información como touched, errors, etc

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="textInput" {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};

export default MyTextInput;
