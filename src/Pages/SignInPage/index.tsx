import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignIn,
  setPasswordSignIn,
} from "@src/redux/reducers/authorizationReducer";

import styles from "./styles.module.scss";

export const SignInPage = () => {
  const { emailSignIn, passwordSignIn } = useTypeSelector(
    (state) => state.login
  );
  const dispatch = useTypeDispatch();

  return (
    <section className={styles.signInPage}>
      {/*TODO: add SignInPage submit logic*/}
      <Form submitHandler={() => {}}>
        <h3 className={styles.signInPage__title}>Login</h3>
        <EmailInput
          labelText="E-mail:"
          inputValue={emailSignIn}
          inputPlaceholder={"your@email.com"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setEmailSignIn(target.value));
          }}
        />
        <PasswordInput
          labelText="Password:"
          inputValue={passwordSignIn}
          inputPlaceholder={"Password"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignIn(target.value));
          }}
        />
        <Button buttonText="Login" />
      </Form>
    </section>
  );
};
