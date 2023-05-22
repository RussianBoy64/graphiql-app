import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignUp,
  setPasswordSignUp,
  setConfirmPasswordSignUp,
} from "@src/redux/reducers/authorizationReducer";

import styles from "./styles.module.scss";

export const SignUpPage = () => {
  const { emailSignUp, passwordSignUp, confirmPasswordSignUp } =
    useTypeSelector((state) => state.login);
  const dispatch = useTypeDispatch();

  return (
    <section className={styles.signUpPage}>
      {/*TODO: add SignUpPage submit logic*/}
      <Form submitHandler={() => {}}>
        <h3 className={styles.signUpPage__title}>Registration</h3>
        <EmailInput
          labelText="E-mail:"
          inputValue={emailSignUp}
          inputPlaceholder={"your@email.com"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setEmailSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText="Password:"
          inputValue={passwordSignUp}
          inputPlaceholder={"Password"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText="Confirm password:"
          inputValue={confirmPasswordSignUp}
          inputPlaceholder={"Confirm password"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setConfirmPasswordSignUp(target.value));
          }}
        />
        <Button buttonText="Register" />
      </Form>
    </section>
  );
};
