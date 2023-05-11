import { FC } from "react";
import PhotoAleksandra from "../../../assets/Aleksandra.jpg";
import styles from "./style.module.scss";

export const AboutAliaksandra: FC = () => {
  return (
    <section className={styles.wrapper_section}>
      <img className={styles.images} src={PhotoAleksandra} alt="Photo" />
      <div className={styles.wrapper_text}>
        <h1 className={styles.name}>Alekdandra Bulova</h1>
        <h3 className={styles.profession}>Front End Developer</h3>
        <p className={styles.decription}>
          I&apos;m a frontend developer. I&apos;m young ambitious used to go to
          my goal. I like to work in a team. Now I want to spend all my strength
          and energy on training and developing my professional skills. I&apos;m
          ready to work hard, study and improve myself. I&apos;m sociable easy
          to train hardworking accurate diligent attentive to details.
        </p>
      </div>
    </section>
  );
};
