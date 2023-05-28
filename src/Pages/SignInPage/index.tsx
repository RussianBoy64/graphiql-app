import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignIn,
  setEmailSignInValidity,
  setPasswordSignIn,
  setPasswordSignInValidity,
  clearSignIn,
  setCurrentUser,
} from "@src/redux/reducers/authorizationReducer";
import { Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { DictionaryWords, useTranslate } from "@src/utils/dictionary";
import { routes } from "@src/routes";
import { validateEmail } from "@src/utils/validateEmail";
import { validatePassword } from "@src/utils/validatePassword";

import styles from "./styles.module.scss";

export const SignInPage = () => {
  const { main } = routes;
  const {
    emailSignIn,
    isEmailSignInValid,
    passwordSignIn,
    isPasswordSignInValid,
    currentUser,
  } = useTypeSelector((state) => state.login);
  const [emailText, emailErrorText, passwordText, passwordErrorText, signInText] =
    useTranslate(
      DictionaryWords.email,
      DictionaryWords.emailError,
      DictionaryWords.password,
      DictionaryWords.passwordError,
      DictionaryWords.SignIn
    );
  const dispatch = useTypeDispatch();

  const signInHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const isEmailValid = validateEmail(emailSignIn);
    const isPasswordValid = validatePassword(passwordSignIn);

    dispatch(setEmailSignInValidity(isEmailValid));
    dispatch(setPasswordSignInValidity(isPasswordValid));

    if (isEmailValid && isPasswordValid) {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn).then(
        (userCredential) => {
          const user = userCredential.user;

          if (user.email) {
            dispatch(setCurrentUser({ email: user.email, uid: user.uid }));
            dispatch(clearSignIn());
          }
        }
      );
    }
  };

  return (
    <section className={styles.signInPage}>
      {currentUser && <Navigate to={main.path} />}

      <Form submitHandler={signInHandler}>
        <h3 className={styles.signInPage__title}>{signInText}</h3>
        <EmailInput
          labelText={emailText}
          inputValue={emailSignIn}
          inputPlaceholder={"your@email.com"}
          isEmailValid={isEmailSignInValid}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setEmailSignIn(target.value));
          }}
        />
        <PasswordInput
          labelText={passwordText}
          inputValue={passwordSignIn}
          inputPlaceholder={passwordText}
          isPasswordValid={isPasswordSignInValid}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignIn(target.value));
          }}
        />
        <Button buttonText={signInText} />
      </Form>
      {!isEmailSignInValid && (
        <p className={styles.signInPage__error}>{emailErrorText}</p>
      )}
      {!isPasswordSignInValid && (
        <p className={styles.signInPage__error}>{passwordErrorText}</p>
      )}
    </section>
  );
};
