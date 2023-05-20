import { Form } from "@components/UI/Form";
import { EmailInput } from "@src/components/UI/EmailInput";

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
          inputPlaceholder={"year@email.com"}
          changeHandler={(event) => {
            const target = event.target as HTMLInputElement;
            console.log(target.value);
          }}
        />
      </Form>
    </section>
  );
};
