import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignUp,
  setPasswordSignUp,
  setConfirmPasswordSignUp,
  clearSignUp,
  setCurrentUser,
  setEmailSignUpValidity,
  setPasswordSignUpValidity,
  setConfirmPasswordSignUpValidity,
} from "@src/redux/reducers/authorizationReducer";
import { Navigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { DictionaryWords, useTranslate } from "@src/utils/dictionary";
import { routes } from "@src/routes";
import { validateEmail } from "@src/utils/validateEmail";
import { validatePassword } from "@src/utils/validatePassword";

import styles from "./styles.module.scss";

export const SignUpPage = () => {
  const { main } = routes;
  const {
    emailSignUp,
    isEmailSignUpValid,
    passwordSignUp,
    isPasswordSignUpValid,
    confirmPasswordSignUp,
    isConfirmPasswordSignUpValid,
    currentUser,
  } = useTypeSelector((state) => state.login);
  const [
    emailText,
    emailErrorText,
    passwordText,
    passwordErrorText,
    passwordConfirmText,
    passwordConfirmErrorText,
    signUpText,
    signUpAndLoginText,
  ] = useTranslate(
    DictionaryWords.email,
    DictionaryWords.emailError,
    DictionaryWords.password,
    DictionaryWords.passwordError,
    DictionaryWords.passwordConfirm,
    DictionaryWords.passwordConfirmError,
    DictionaryWords.SignUp,
    DictionaryWords.SignUpAndLogin
  );
  const dispatch = useTypeDispatch();

  const signUpHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const isEmailValid = validateEmail(emailSignUp);
    const isPasswordValid = validatePassword(passwordSignUp);
    const isConfirmPasswordValid = passwordSignUp === confirmPasswordSignUp;

    dispatch(setEmailSignUpValidity(isEmailValid));
    dispatch(setPasswordSignUpValidity(isPasswordValid));
    dispatch(setConfirmPasswordSignUpValidity(isConfirmPasswordValid));

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp).then(
        (userCredential) => {
          const user = userCredential.user;

          if (user.email) {
            dispatch(setCurrentUser({ email: user.email, uid: user.uid }));
            dispatch(clearSignUp());
          }
        }
      );
    }
  };

  return (
    <section className={styles.signUpPage}>
      {currentUser && <Navigate to={main.path} />}

      <Form submitHandler={signUpHandler}>
        <h3 className={styles.signUpPage__title}>{signUpText}</h3>
        <EmailInput
          labelText={emailText}
          inputValue={emailSignUp}
          isEmailValid={isEmailSignUpValid}
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
          isPasswordValid={isPasswordSignUpValid}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText={passwordConfirmText}
          inputValue={confirmPasswordSignUp}
          inputPlaceholder={passwordConfirmText}
          isPasswordValid={isConfirmPasswordSignUpValid}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setConfirmPasswordSignUp(target.value));
          }}
        />
        <Button buttonText={signUpAndLoginText} />
      </Form>
      {!isEmailSignUpValid && (
        <p className={styles.signUpPage__error}>{emailErrorText}</p>
      )}
      {!isPasswordSignUpValid && (
        <p className={styles.signUpPage__error}>{passwordErrorText}</p>
      )}
      {!isConfirmPasswordSignUpValid && (
        <p className={styles.signUpPage__error}>{passwordConfirmErrorText}</p>
      )}
    </section>
  );
};
