import { AboutStudent } from "@components/index";
import { aboutStudent } from "../../utils/aboutStudents";
import { DictionaryWords, useTranslate } from "@src/utils/dictionary";
import { useTypeSelector } from "@src/redux/store";

import styles from "./styles.module.scss";

export const WelcomePage = () => {
  const language = useTypeSelector((state) => state.language.value);
  const [titleText, subTitleText, hereText, RacoonsText] = useTranslate(
    DictionaryWords.welcomeAboutTitle,
    DictionaryWords.welcomeAbout,
    DictionaryWords.here,
    DictionaryWords.RaccoonsTeam
  );

  return (
    <section className={styles.mainPage}>
      <h3 className={styles.title}>{titleText}</h3>
      <p className={styles.about}>
        {subTitleText}{" "}
        <a
          className={styles.link}
          href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
        >
          {hereText}.
        </a>
      </p>
      <h1 className={styles.title}>{RacoonsText}</h1>
      {aboutStudent.map((student, index) => {
        return (
          <AboutStudent
            key={index}
            name={student.name[language as keyof typeof student.name]}
            profession={student.profession[language as keyof typeof student.profession]}
            photo={student.photo}
            description={
              student.description[language as keyof typeof student.description]
            }
          />
        );
      })}
    </section>
  );
};
