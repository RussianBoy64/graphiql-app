import { Button, EmailInput, Form, PasswordInput } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import {
  setEmailSignUp,
  setPasswordSignUp,
  setConfirmPasswordSignUp,
} from "@src/redux/reducers/authorizationReducer";
import { useTranslate } from "@src/utils/dictionary";

import styles from "./styles.module.scss";

export const SignUpPage = () => {
  const { emailSignUp, passwordSignUp, confirmPasswordSignUp } =
    useTypeSelector((state) => state.login);
  const dispatch = useTypeDispatch();

  return (
    <section className={styles.signUpPage}>
      {/*TODO: add SignUpPage submit logic*/}
      <Form submitHandler={() => {}}>
        <h3 className={styles.signUpPage__title}>{useTranslate('SignUp')}</h3>
        <EmailInput
          labelText={useTranslate('email')}
          inputValue={emailSignUp}
          inputPlaceholder={"your@email.com"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setEmailSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText={useTranslate('password')}
          inputValue={passwordSignUp}
          inputPlaceholder={useTranslate('password')}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setPasswordSignUp(target.value));
          }}
        />
        <PasswordInput
          labelText={useTranslate('passwordConfirm')}
          inputValue={confirmPasswordSignUp}
          inputPlaceholder={useTranslate('passwordConfirm')}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            dispatch(setConfirmPasswordSignUp(target.value));
          }}
        />
        <Button buttonText={useTranslate('SignUp')} />
      </Form>
    </section>
  );
};
