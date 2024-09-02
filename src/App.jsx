import { useState } from "react";
import "./assets/myreset.css";
import "./assets/App.css";
import Header from "./header/Header";
import InputField from "./inputField/InputField";
import NoList from "./postList/NoList";
import PostList from "./postList/PostList";
import TotalCount from "./totalCount/TotalCount";

function App() {
  // const data = [
  //   "송도 센트럴 파크",
  //   "파주 프로방스 / 헤이리 마을",
  //   "춘천 소양강 스카이워크",
  // ];

  const data = JSON.parse(localStorage.getItem("tripLists")) || [];
  let [lists, setList] = useState(data);

  return (
    <>
      <Header />
      <InputField setList={setList} />
      <TotalCount lists={lists} />
      {lists.length == 0 ? (
        <NoList />
      ) : (
        <PostList lists={lists} setList={setList} />
      )}
    </>
  );
}

export default App;
