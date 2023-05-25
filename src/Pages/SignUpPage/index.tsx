import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignUp,
  setPasswordSignUp,
  setConfirmPasswordSignUp,
} from "@src/redux/reducers/authorizationReducer";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useTranslate } from "@src/utils/dictionary";
import { routes } from "@src/routes";

import styles from "./styles.module.scss";

export const SignUpPage = () => {
  const { signIn } = routes;
  const { emailSignUp, passwordSignUp, confirmPasswordSignUp } = useTypeSelector(
    (state) => state.login
  );
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(signIn.path);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Code: ${errorCode}; Message: ${errorMessage}`);
      });
  };

  return (
    <section className={styles.signUpPage}>
      <Form submitHandler={submitHandler}>
        <h3 className={styles.signUpPage__title}>{useTranslate("SignUp")}</h3>
        <EmailInput
          labelText={useTranslate("email")}
          inputValue={emailSignUp}
          inputPlaceholder={"your@email.com"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setEmailSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText={useTranslate("password")}
          inputValue={passwordSignUp}
          inputPlaceholder={useTranslate("password")}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText={useTranslate("passwordConfirm")}
          inputValue={confirmPasswordSignUp}
          inputPlaceholder={useTranslate("passwordConfirm")}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setConfirmPasswordSignUp(target.value));
          }}
        />
        <Button buttonText={useTranslate("SignUp")} />
      </Form>
    </section>
  );
};
