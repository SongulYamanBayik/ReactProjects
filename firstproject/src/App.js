import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course"; // fonksiyonu import ederken süslüye gerek yok ama export default u olmalı
// import { Course } from './Course';
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";

function App() {
  return (
    <div className="App">
      {/* <Course2/>  */}
      {/* <img src={image1}/> */}
      <section className="hero is-success">
        <div className="hero-body">
          <p className="title">Kamp Yerleri</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={image1}
                title="kart 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus, tristique ac mattis quis, efficitur ac nunc."
              />
            </div>
            <div className="column">
              <Course
                image={image2}
                title="kart 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus, tristique ac mattis quis, efficitur ac nunc."
              />
            </div>
            <div className="column">
              <Course
                image={image3}
                title="kart 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus, tristique ac mattis quis, efficitur ac nunc."
              />
            </div>
            <div className="column">
              <Course
                image={image4}
                title="kart 4"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus, tristique ac mattis quis, efficitur ac nunc."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
