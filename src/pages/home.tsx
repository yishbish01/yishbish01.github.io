import "./home.scss";
import { HiArrowSmallDown } from "react-icons/hi2";
import YazyButton from "../components/yazy_button";

const HomePage = () => {
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
    </>
  );
};
export default HomePage;
