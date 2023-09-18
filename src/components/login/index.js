/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { auth, signInWithGoogle } from "./firebase";
import {
  setEmailState,
  setPasswordState,
} from "../../redux/reducers/authSlice";
import { clearErrors } from "../../redux/reducers/formErrorsSlice";
import validate from "../../helpers/formValidator";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formErrors = useSelector((state) => state.formError.errors);
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [iscaptcha, setIsCaptcha] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [submit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loading) {
      // Trigger a loading screen
      return;
    }
    if (user && iscaptcha) {
      dispatch(clearErrors());
      navigate("/dashboard/home");
    }
  }, [user, loading, iscaptcha]);
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
    validate(formValues, iscaptcha, dispatch);
    // setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && iscaptcha) {
      dispatch(setEmailState(email));
      dispatch(setPasswordState(password));
    }
  };
  return (
    <div className="Login">
      <div className="container">
        <div className="formfeilds">
          <form onSubmit={handleSubmit}>
            <h1>{t("loginHeading")}</h1>
            <div className="ui divider" />
            <div className="ui form">
              <div className="field">
                <label htmlFor="emailInput">{t("auth.email")}</label>
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
                <label htmlFor="passwordInput">{t("auth.password")}</label>
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
                  sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={handleCaptcha}
                />
              </div>
              {formErrors.captcha ? (
                <p>{formErrors.captcha}</p>
              ) : (
                <p>{formErrors.firebase}</p>
              )}
              <button type="submit" className="fluild ui button blue">
                {t("auth.login")}
              </button>
            </div>
          </form>
          <div className="GoogleButton">
            <button
              type="submit"
              className="fluild ui button red"
              onClick={signInWithGoogle}
            >
              {t("auth.googleSignup")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
