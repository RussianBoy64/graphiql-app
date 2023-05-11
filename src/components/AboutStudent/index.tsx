import { FC } from "react";
import styles from "./style.module.scss";

interface IProps {
  name: string;
  profession: string;
  photo: string;
  decription: string;
}

export const AboutStudent: FC<IProps> = ({
  name,
  profession,
  photo,
  decription,
}) => {
  return (
    <section className={styles.wrapper_section}>
      <img className={styles.images} src={photo} alt="Photo" />
      <div className={styles.wrapper_text}>
        <h1 className={styles.name}>{name}</h1>
        <h3 className={styles.profession}>{profession}</h3>
        <p className={styles.decription}>{decription}</p>
      </div>
    </section>
  );
};
