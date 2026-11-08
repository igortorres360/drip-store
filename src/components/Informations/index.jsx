import { Link } from "react-router-dom";
import "./style.css";

function Informations({ title, informations }) {
  return (
    <div className="informations">
      <h4 className="informations-title">{title}</h4>
      <ul className="informations-list">
        {informations.map((item) => (
          <li key={item.text}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Informations;