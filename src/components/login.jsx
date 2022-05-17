import { useState, useRef, useCallback, Fragment } from "react";

export const Login = ({ setlogin }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConpass] = useState("");
  const [terms, setterms] = useState();

  const nameElement = useRef();
  const nameError = useRef();

  const passwordElement = useRef();
  const passwordError = useRef();

  const mailElement = useRef();
  const mailError = useRef();

  const phoneElement = useRef();
  const phoneError = useRef();

  const confirmPasswordElement = useRef();
  const confirmPasswordError = useRef();

  const checkboxElement = useRef();
  const checkboxError = useRef();

  const formOK = useRef([false, false, false, false, false, false]);

  const inputHandler = ({ type, value }) => {
    switch (type) {
      case "mail":
        setMail(value);
        if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g.test(value)) {
          formOK.current[0] = true;
          mailError.current.innerText = "";
        } else {
          formOK.current[0] = false;
          mailError.current.innerText = "Invalid Email, please enter correct email id.";
        }
        break;
      case "password":
        setPass(value);
        setConpass("");
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/g.test(value)) {
          formOK.current[1] = true;
          passwordError.current.innerText = "";
        } else {
          formOK.current[1] = false;
          passwordError.current.innerText =
            "Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number.";
        }
        break;
      case "confirmPassword":
        setConpass(value);
        if (value === pass) {
          formOK.current[2] = true;
          confirmPasswordError.current.innerText = "";
        } else {
          formOK.current[2] = false;
          confirmPasswordError.current.innerText = "Password entered does not match.";
        }
        break;
      case "name":
        setName(value);
        if (/^[a-zA-Z ]+$/g.test(value)) {
          formOK.current[3] = true;
          nameError.current.innerText = "";
        } else {
          formOK.current[3] = false;
          nameError.current.innerText = "Invalid name, please enter valid name.";
        }
        break;
      case "phone":
        setPhone(value);
        if (/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/g.test(value)) {
          formOK.current[4] = true;
          phoneError.current.innerText = "";
        } else {
          formOK.current[4] = false;
          phoneError.current.innerText = "Please enter correct phone number.";
        }
        break;
      case "check":
        setterms(value);
        console.log(value);
        if (value) {
          formOK.current[5] = true;
          checkboxError.current.innerText = "";
        } else {
          formOK.current[5] = false;
          checkboxError.current.innerText = "Please accept terms and conditions.";
        }
        break;
      default:
        break;
    }
  };

  const formHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (formOK.current.every((e) => e)) {
        setlogin(true);
      } else {
        console.log("fail", formOK.current);
        alert("Please enter all the required data and then try.");
      }
    },
    [setlogin]
  );

  return (
    <Fragment>
      <div className="c-logoSide">
        <img className="__logo" src="./image.png" alt="aside-logo" />
        <h1 className="__title">Choose a date range</h1>
        <p className="__tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum venenatis.</p>
      </div>
      <div className="c-formSide">
        <form className="__registerForm" action="#" onSubmit={formHandler}>
          <h1>Create an account</h1>
          <div className="__formInput">
            <label htmlFor="mail">Your email address</label>
            <input
              ref={mailElement}
              type="email"
              value={mail}
              autoComplete="email"
              onChange={(e) => inputHandler({ value: e.currentTarget.value, type: "mail" })}
              name="mail"
              id="mail"
            />
            <span ref={mailError} className="mail __error"></span>
          </div>
          <div className="__formInput">
            <label htmlFor="password">Your password</label>
            <input
              ref={passwordElement}
              type="password"
              value={pass}
              autoComplete="current-password"
              onChange={(e) => inputHandler({ value: e.currentTarget.value, type: "password" })}
              name="password"
              id="password"
            />
            <span ref={passwordError} className="password __error"></span>
          </div>
          <div className="__formInput">
            <label htmlFor="confirmPassword">Confirm your password</label>
            <input
              type="text"
              ref={confirmPasswordElement}
              value={conpass}
              onChange={(e) => inputHandler({ value: e.currentTarget.value, type: "confirmPassword" })}
              name="confirmPassword"
              id="confirmPassword"
            />
            <span ref={confirmPasswordError} className="__error"></span>
          </div>
          <div className="__formInput">
            <label htmlFor="name">Your full name</label>
            <input
              ref={nameElement}
              type="text"
              value={name}
              autoComplete="name"
              onChange={(e) => inputHandler({ value: e.currentTarget.value, type: "name" })}
              name="name"
              id="name"
            />
            <span ref={nameError} className="__error"></span>
          </div>
          <div className="__formInput">
            <label htmlFor="phone">Your phone number</label>
            <input
              ref={phoneElement}
              type="text"
              value={phone}
              autoComplete="phone"
              onChange={(e) => inputHandler({ value: e.currentTarget.value, type: "phone" })}
              name="phone"
              id="phone"
            />
            <span ref={phoneError} className="__error"></span>
          </div>
          <div className="__formInput __checkbox">
            <input
              ref={checkboxElement}
              type="checkbox"
              value={terms}
              onChange={(e) => inputHandler({ value: e.currentTarget.checked, type: "check" })}
              name="termsAndCondition"
              id="termsAndCondition"
            />
            <label htmlFor="termsAndCondition">I read and agree Terms and Conditions.</label>
            <span ref={checkboxError} className="__error"></span>
          </div>
          <button type="submit" className="__submitButton">
            Create Account
          </button>
        </form>
      </div>
    </Fragment>
  );
};
