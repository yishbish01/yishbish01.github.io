import "./home.scss";
import { HiArrowSmallDown } from "react-icons/hi2";
import YazyButton from "../components/yazy_button";
import YazyCard from "../components/yazy_card";

const HomePage = () => {
  const momento = require("../assets/momento.png");
  const fct = require("../assets/fct.png");
  const univol = require("../assets/univol.png");
  const yocial = require("../assets/yocial.png");

  return (
    <>
      <section className="intro">
        <h1>
          YASHINI
          <br />
          RAVINDRAN
        </h1>
        <div className="description-container">
          <span>*</span>
          <h3>
            I'm a product and UX designer creating human experiences in an
            ever-evolving digital world.
          </h3>
        </div>
      </section>
      <div className="view_work-container">
        <hr
          style={{
            backgroundColor: "#A2A2A2",
            height: 1,
            width: "100%",
          }}
        />
        <YazyButton
          text="VIEW FEATURED WORK"
          icon={<HiArrowSmallDown size="1.5em" />}
        />
      </div>
      <section className="featured-work">
        <div className="card-row">
          <YazyCard
            title="MOMENTO"
            description="Blending Fun with Easy Organization: A Case Study on Capturing and Sharing Moments in a Photo App."
            src={momento}
            tags={["[UI/UX DESIGN]"]}
          />
          <YazyCard
            title="YOCIAL"
            description="Engaging Students with AMPD Clubs: A Case Study on Tracking Club Events"
            src={yocial}
            tags={["[COMPETITION]"]}
          />
        </div>
        <div className="card-row">
          <YazyCard
            title="UNIVOL"
            description="Accessible Volunteering: Simplifying Engagement for High School Students"
            src={univol}
            tags={["[COMPETITION]"]}
          />
          <YazyCard
            title="FCT"
            description="My Journey at First Canadian Title Insurance: Internship Highlights and Lessons"
            src={fct}
            tags={["[UI/UX DESIGN]", "[INTERNSHIP]"]}
          />
        </div>
      </section>
    </>
  );
};
export default HomePage;
