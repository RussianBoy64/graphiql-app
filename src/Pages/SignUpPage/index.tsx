import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignUp,
  setPasswordSignUp,
  setConfirmPasswordSignUp,
  clearSignUp,
  setCurrentUser,
} from "@src/redux/reducers/authorizationReducer";
import { Navigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { DictionaryWords, useTranslate } from "@src/utils/dictionary";
import { routes } from "@src/routes";

import styles from "./styles.module.scss";

export const SignUpPage = () => {
  const { main } = routes;
  const { emailSignUp, passwordSignUp, confirmPasswordSignUp, currentUser } =
    useTypeSelector((state) => state.login);
  const [emailText, passwordText, passwordConfirmText, signUpText, signUpAndLoginText] =
    useTranslate(
      DictionaryWords.email,
      DictionaryWords.password,
      DictionaryWords.passwordConfirm,
      DictionaryWords.SignUp,
      DictionaryWords.SignUpAndLogin
    );
  const dispatch = useTypeDispatch();

  const signUpHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user.email) {
          dispatch(setCurrentUser({ email: user.email, uid: user.uid }));
          dispatch(clearSignUp());
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Code: ${errorCode}; Message: ${errorMessage}`);
      });
  };

  return (
    <section className={styles.signUpPage}>
      {currentUser && <Navigate to={main.path} />}

      <Form submitHandler={signUpHandler}>
        <h3 className={styles.signUpPage__title}>{signUpText}</h3>
        <EmailInput
          labelText={emailText}
          inputValue={emailSignUp}
          inputPlaceholder={"your@email.com"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setEmailSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText={passwordText}
          inputValue={passwordSignUp}
          inputPlaceholder={passwordText}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText={passwordConfirmText}
          inputValue={confirmPasswordSignUp}
          inputPlaceholder={passwordConfirmText}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setConfirmPasswordSignUp(target.value));
          }}
        />
        <Button buttonText={signUpAndLoginText} />
      </Form>
    </section>
  );
};
