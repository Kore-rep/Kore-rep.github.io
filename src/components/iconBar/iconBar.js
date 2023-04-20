import "./iconBar.scss";

export default function IconBar(props) {
  const { icons } = props;
  return <div className="iconContainer">{icons}</div>;
}
