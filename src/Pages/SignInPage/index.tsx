import { Form } from "@components/UI/Form";
import { EmailInput } from "@src/components/UI/EmailInput";
import { PasswordInput } from "@src/components/UI/PasswordInput";
import { Button } from "@src/components";

import styles from "./styles.module.scss";

export const SignInPage = () => {
  return (
    <section className={styles.signInPage}>
      {/*TODO: add SignInPage submit logic*/}
      <Form submitHandler={() => {}}>
        <h3 className={styles.signInPage__title}>Login</h3>
        <EmailInput
          labelText="E-mail:"
          inputValue={"hello"}
          inputPlaceholder={"your@email.com"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            console.log(target.value);
          }}
        />
        <PasswordInput
          labelText="Password:"
          inputValue={"password"}
          inputPlaceholder={"Password"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            console.log(target.value);
          }}
        />
        <Button buttonText="Login" />
      </Form>
    </section>
  );
};
