import { HiArrowSmallRight } from "react-icons/hi2";
import YazyButton from "./yazy_button";
import "./yazy_card.scss";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  description: string;
  src: string;
  tags: string[];
}
const YazyCard = (props: Props) => {
  return (
    <div className="yazy-card" id={props.title}>
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
      <img src={props.src} alt={props.title} />
      <div className="card-footer">
        <div className="tags">
          {props.tags.map((item, i) => (
            <h4>{item}</h4>
          ))}
        </div>
        <Link to={`/${props.title}`}>
          <YazyButton
            text="VIEW MORE"
            icon={<HiArrowSmallRight size="1.5em" />}
          />
        </Link>
      </div>
    </div>
  );
};
export default YazyCard;
