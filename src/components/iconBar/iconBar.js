import "./iconBar.scss";

export default function IconBar(props) {
  const { icons } = props;
  return <div className="fade-in iconContainer">{icons}</div>;
}
