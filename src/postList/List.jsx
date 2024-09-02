import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List({ list, setList, index }) {
  const removeItem = () => {
    setList((prev) => {
      const newList = prev.filter((_, i) => i !== index);
      localStorage.setItem("tripLists", JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <li className="list">
      <p>{list}</p>
      <FontAwesomeIcon icon={faTrash} className="icon" onClick={removeItem} />
    </li>
  );
}
