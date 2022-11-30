import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    isValidEmail,
    onChange,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form action="" onSubmit={onSubmit} noValidate>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={onChange}
          className={`${!name.trim().length && "has-error"}`}
        />
        {!name.trim().length && <span>Este campo es obligatorio</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>El mail ingresado es inválido</span>}
        <input
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={onChange}
        />
        {!password1.trim().length && <span>Este campo es obligatorio</span>}
        {password1.trim().length && password1.trim().length < 6 ? (
          <span>Debe contener al menos 6 caracteres</span>
        ) : null}
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          name="password2"
          onChange={onChange}
        />
        {!password2.trim().length && <span>Este campo es obligatorio</span>}
        {password2.trim().length && password2 !== password1 ? (
          <span>Las contraseñas no coinciden</span>
        ) : null}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
