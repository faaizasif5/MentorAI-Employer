import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import validate from "../../helpers/formValidator";
import { translation } from "../../helpers/i8n-helper";
import {
  setEmailState,
  setPasswordState,
} from "../../redux/reducers/authSlice";

function Login() {
  const { t, i18n } = useTranslation("auth");
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [iscaptcha, setIsCaptcha] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const emailAlert = useSelector((state) => state.auth.email);
  const passwordAlert = useSelector((state) => state.auth.password);
  // const navigate = useNavigate();

  function handleCaptcha() {
    setIsCaptcha(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "email") {
      setEmail(e.target.value);
      localStorage.setItem("loggedInUserEmail", e.target.value);
    } else {
      setPassword(e.target.value);
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues, iscaptcha);
    setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0 && iscaptcha) {
      dispatch(setEmailState(email));
      dispatch(setPasswordState(password));
      const message = `Email: ${emailAlert}\nPassword: ${passwordAlert}`;
      alert(message);
    }
  };
  // useEffect(() => {
  //     if (Object.keys(formErrors).length === 0 && isSubmit) {
  //         //navigate("/dashboard/home");
  //     }
  // }, [formErrors]);
  // const login = (data) => {
  //   signin(data);
  // };
  return (
    <div className="Login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>{t("Mentor AI Employer Login")}</h1>
          <div className="ui divider" />
          <div className="ui form">
            <div className="field">
              <label>{t("Email")}</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </div>
            <div className="field">
              <label>{t("Password")} </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="captcha">
              <ReCAPTCHA
                sitekey="6LeEHGoiAAAAABNDVxwQ-o6kX2n_mm1YhD5fFYPP"
                onChange={handleCaptcha}
              />
            </div>
            <p>{formErrors.captcha}</p>
            <button type="submit" className="fluild ui button blue">
              {t("Login")}
            </button>
            <button
              type="submit"
              className="fluid ui google plus button"
              style={{ marginTop: "10px", backgroundColor: "red" }}
            >
              <i className="google icon" />
              {t("Login with Google")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
