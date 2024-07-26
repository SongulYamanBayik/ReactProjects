import Kamp1 from "./images/1.jpg";
import Kamp2 from "./images/2.jpg";
import Kamp3 from "./images/3.jpg";
import Kamp4 from "./images/4.jpg";

const courseMap = {
  Kamp1,
  Kamp2,
  Kamp3,
  Kamp4,
};

function Course({ courseName }) {
  console.log(courseName);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} />
    </div>
  );
}

export default Course;
