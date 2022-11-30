import React from "react";
import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  placeolder?: string;
  [x: string]: any;
}

const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />

      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default MySelect;
