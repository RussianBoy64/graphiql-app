import { Form } from "@components/UI/Form";
import { EmailInput } from "@src/components/UI/EmailInput";
import { PasswordInput } from "@src/components/UI/PasswordInput";
import { Button } from "@src/components";

import styles from "./styles.module.scss";

export const SignUpPage = () => {
  return (
    <section className={styles.signUpPage}>
      {/*TODO: add SignUpPage submit logic*/}
      <Form submitHandler={() => {}}>
        <h3 className={styles.signUpPage__title}>Registration</h3>
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
        <PasswordInput
          labelText="Confirm password:"
          inputValue={"password"}
          inputPlaceholder={"Confirm password"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            console.log(target.value);
          }}
        />
        <Button buttonText="Register" />
      </Form>
    </section>
  );
};
