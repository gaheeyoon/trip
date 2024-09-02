import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <h1 className="header">
      <FontAwesomeIcon icon={faRocket} className="i" />
      <span>가자</span>
      <span>여행</span>
    </h1>
  );
}
