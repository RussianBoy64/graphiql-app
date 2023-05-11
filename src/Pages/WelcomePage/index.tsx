import { AboutStudent } from "@components/index";
import { aboutStudent } from "../../utils/aboutStudents";

export const WelcomePage = () => {
  return (
    <>
      <h1>Welcome Page</h1>
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
    </>
  );
};
