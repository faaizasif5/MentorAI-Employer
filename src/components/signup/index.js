import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../login/styles.css";
import { FormController } from "Common/controls";
import { Header } from "Layout/header";
import { useHistory } from "react-router-dom";
import { signupSchemaValidator } from "Helpers/auth-validator";
import { translation } from "Helpers/i8n-helper";
import { SignupFormFields } from "Constants/forms";

function Signup() {
  const t = translation("auth");
  const history = useHistory();

  const formOptions = { resolver: yupResolver(signupSchemaValidator) };
  const { register, handleSubmit, formState } = useForm(formOptions);

  const signup = (data) => {
    history.push("/login");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(signup)}>
      <Header>
        <span>{t("signup")}</span>
      </Header>
      {React.Children.toArray(
        SignupFormFields.map((item) => {
          return (
            <FormController
              {...item}
              formState={formState}
              register={register}
              {...(item.options && {
                options: item.options,
              })}
            />
          );
        }),
      )}
      <input type="submit" />
    </form>
  );
}

export default Signup;
