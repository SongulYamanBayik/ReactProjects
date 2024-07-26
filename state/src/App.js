import "./App.css";
import Course from "./Course";
import { useState } from "react";
// import { useState } from "react";

// function App() {
//   const [value, setValue] = useState(0); //useStateSnippet şeklinde kısayolu var ancak bende olmadı.
//   const handleClick = () => {
//     setValue(value + 1);
//   };
//   return (
//     <div className="App">
//       <button onClick={handleClick}>Kurs Ekle</button>
//       {/* <button
//         onClick={() => {
//           console.log("helloo!");
//         }}
//       >
//         Kurs Ekle
//       </button> */}
//       <div>Kurs Sayısı: {value}</div>
//     </div>
//   );
// }

function getRandomCourse() {
  const courseArray = ["Kamp1", "Kamp2", "Kamp3", "Kamp4"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Kamp Ekle
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}
export default App;
