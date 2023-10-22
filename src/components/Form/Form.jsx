import { useContext, useState } from "react";
import classes from "./Form.module.css";
import { validTextContext } from "../../context/context-valid";

const Form = ({ addIsValid }) => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const validcontext = useContext(validTextContext);

  const changeEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const validEmail = validEmailRegex.test(emailValue);
    setEmailIsValid(validEmail);
  };
  const changePasswordHandler = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    const validPassword = passwordValue.length > 5;
    setPasswordIsValid(validPassword);
  };
  const changeNameHandler = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    const validName = Number(nameValue);
    setNameValid(validName);
  };
  const isValid = emailIsValid && passwordIsValid && nameValid;

  const submitHandler = (e) => {
    e.preventDefault();
    validcontext.addIsValid(Boolean(isValid));
  };

  return (
    <form onSubmit={submitHandler} className={classes.formBlock}>
      <label> sign up </label>
      <input
        onChange={changeNameHandler}
        className={classes.username}
        type="text"
        placeholder="username"
      />
      <input
        onChange={changeEmailHandler}
        className={classes.email}
        type="email"
        placeholder="email"
      />
      <input
        className={classes.password}
        onChange={changePasswordHandler}
        type="password"
        placeholder="password"
      />
      <button disabled={!isValid} className={classes.button}>
        Add
      </button>
    </form>
  );
};

export default Form;
