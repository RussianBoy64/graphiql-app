import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignIn,
  setPasswordSignIn,
} from "@src/redux/reducers/authorizationReducer";
import { useTranslate } from "@src/utils/dictionary";

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
        <h3 className={styles.signInPage__title}>{useTranslate('SignIn')}</h3>
        <EmailInput
          labelText={useTranslate('email')}
          inputValue={emailSignIn}
          inputPlaceholder={"your@email.com"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setEmailSignIn(target.value));
          }}
        />
        <PasswordInput
          labelText={useTranslate('password')}
          inputValue={passwordSignIn}
          inputPlaceholder={useTranslate('password')}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignIn(target.value));
          }}
        />
        <Button buttonText={useTranslate('SignIn')} />
      </Form>
    </section>
  );
};
