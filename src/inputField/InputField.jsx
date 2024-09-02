import "./InputField.css";
import { useState } from "react";

export default function Input({ setList }) {
  const [inputText, setInputText] = useState("");
  const inputItem = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  console.log("inputText--", inputText);

  const addItem = () => {
    // 공백 제거, 글자 수가 0이면 추가하지 않음, 경고 메시지
    if (inputText.trim().length < 2) {
      alert("내용을 입력해주세요");
      return;
    }

    setList((prev) => {
      const newList = [inputText, ...prev];
      localStorage.setItem("tripLists", JSON.stringify(newList));
      return newList;
    });
    setInputText("");
    document.querySelector(".tripInput").focus();
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="inputField mw">
      <input
        className="tripInput"
        value={inputText}
        type="text"
        placeholder="가고싶은 여행지를 등록하세요"
        onChange={inputItem}
        onKeyUp={handleKeyUp}
      />
      <button onClick={addItem}>ADD</button>
    </div>
  );
}
