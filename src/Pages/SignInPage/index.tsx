import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignIn,
  setPasswordSignIn,
  clearSignIn,
  setCurrentUser,
} from "@src/redux/reducers/authorizationReducer";
import { Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { DictionaryWords, useTranslate } from "@src/utils/dictionary";
import { routes } from "@src/routes";

import styles from "./styles.module.scss";

export const SignInPage = () => {
  const { main } = routes;
  const { emailSignIn, passwordSignIn, currentUser } = useTypeSelector(
    (state) => state.login
  );
  const [emailText, passwordText, signInText] = useTranslate(
    DictionaryWords.email,
    DictionaryWords.password,
    DictionaryWords.SignIn
  );
  const dispatch = useTypeDispatch();

  const signInHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user.email) {
          dispatch(setCurrentUser({ email: user.email, uid: user.uid }));
          dispatch(clearSignIn());
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Code: ${errorCode}; Message: ${errorMessage}`);
        console.log(error);
      });
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
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setEmailSignIn(target.value));
          }}
        />
        <PasswordInput
          labelText={passwordText}
          inputValue={passwordSignIn}
          inputPlaceholder={passwordText}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignIn(target.value));
          }}
        />
        <Button buttonText={signInText} />
      </Form>
    </section>
  );
};
