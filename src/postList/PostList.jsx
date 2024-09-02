import "./list.css";
import List from "./List";

export default function PostList({ lists, setList }) {
  console.log("PostList--", lists);

  return (
    <ul className="postList mw">
      {lists.map((list, index) => (
        <List key={index} list={list} setList={setList} index={index} />
      ))}
    </ul>
  );
}
