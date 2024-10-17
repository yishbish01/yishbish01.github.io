import "./home.scss";
import { HiArrowSmallDown } from "react-icons/hi2";

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
          <h2>
            I'm a product and UX designer creating human experiences in an
            ever-evolving digital world.
          </h2>
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
        <button>
          VIEW FEATURED WORK <HiArrowSmallDown size="1.5em" />
        </button>
      </div>
    </>
  );
};
export default HomePage;
