import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

export default function NoList() {
  return (
    <div className="noList mw">
      <FontAwesomeIcon icon={faClipboard} className="icon" />
      <p>등록된 여행지가 없습니다.</p>
    </div>
  );
}
