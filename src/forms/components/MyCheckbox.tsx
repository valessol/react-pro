import React from "react";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

const MyCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  // field devuelve las propiedades como onBlur, onChange, value y name... los controles de formik
  // meta contiene la información como touched, errors, etc

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>

      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};

export default MyCheckbox;
