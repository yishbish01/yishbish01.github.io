import "./yazy_button.scss";
interface Props {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
const YazyButton = (props: Props) => {
  return (
    <button className="yazy-button" onClick={props.onClick}>
      {props.text}
      {props.icon}
    </button>
  );
};
export default YazyButton;
