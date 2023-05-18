import { AboutStudent } from "@components/index";
import { aboutStudent } from "../../utils/aboutStudents";

import styles from "./styles.module.scss";

export const WelcomePage = () => {
  return (
    <section className={styles.mainPage}>
      <h3 className={styles.title}>About project</h3>
      <p className={styles.about}>
        The final task of RSSchool React2023Q1 course. Description and technical
        requirements you can see{" "}
        <a
          className={styles.link}
          href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
        >
          here.
        </a>
      </p>
      <h1 className={styles.title}>Raccoons team</h1>
      {aboutStudent.map((student, index) => {
        return (
          <AboutStudent
            key={index}
            name={student.name}
            profession={student.profession}
            photo={student.photo}
            decription={student.decription}
          />
        );
      })}
    </section>
  );
};
