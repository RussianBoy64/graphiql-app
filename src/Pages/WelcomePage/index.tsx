import { AboutStudent } from "@components/index";
import { aboutStudent } from "../../utils/aboutStudents";
import { useTranslate } from "@src/utils/dictionary";
import { useTypeSelector } from '@src/redux/store';

import styles from "./styles.module.scss";

export const WelcomePage = () => {
  const language = useTypeSelector((state) => state.language.value);
  return (
    <section className={styles.mainPage}>
      <h3 className={styles.title}>{useTranslate('welcomeAboutTitle')}</h3>
      <p className={styles.about}>{useTranslate('welcomeAbout')}
        {" "}
        <a
          className={styles.link}
          href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
        >
          {useTranslate('here')}.
        </a>
      </p>
      <h1 className={styles.title}>{useTranslate('Raccoons team')}</h1>
      {aboutStudent.map((student, index) => {
        return (
          <AboutStudent
            key={index}
            name={student.name[language as keyof typeof student.name]}
            profession={student.profession[language as keyof typeof student.profession]}
            photo={student.photo}
            description={student.description[language as keyof typeof student.description]}
          />
        );
      })}
    </section>
  );
};
