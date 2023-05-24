import { FC } from "react";
import styles from "./style.module.scss";

interface IProps {
  name: string;
  profession: string;
  photo: string;
  description: string;
}

export const AboutStudent: FC<IProps> = ({ name, profession, photo, description }) => {
  return (
    <div className={styles.wrapper_section}>
      <img className={styles.image} src={photo} alt="Photo" />
      <div className={styles.wrapper_text}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.profession}>{profession}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
