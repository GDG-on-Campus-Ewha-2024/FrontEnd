import Button from "../components/Button.jsx";
import Letter from "../components/Letter.jsx";
import instance from "../api/instance.js";
import { useState } from "react";

export default function WriteLetter() {
  const [content, setContent] = useState("");
  const [toName, setToName] = useState("");
  const userName = "용가리";

  const [wordCount, setWordCount] = useState("0");

  const handleInput = (e) => {
    setContent(e.target.value);
    setWordCount(e.target.value.length);
  };

  const handleSumbit = async () => {
    if (!content || !toName) {
      alert("받을 사람과 편지를 모두 입력해주세요!");
      return;
    }

    const postData = {
      toName: toName,
      fromName: userName,
      message: content,
      type: "뭐를 써야되지...?",
    };

    try {
      const response = await instance.post("/messages", postData);
      if (response.status === 200) {
        console.log("편지 작성 성공:", response.data);

        setContent("");
        setWordCount("0");
        setToName("");
      }
    } catch (error) {
      console.error("편지 작성 오류:", error);
      alert("편지 작성에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="bg-back h-screen w-screen flex items-center flex-col">
      <h3 className="mt-[80px] font-['TTLaundryGothicB'] text-[30px]">
        💌
        <input
          className="w-[150px] h-10 bg-transparent border-b-2 border-black mx-2 focus:outline-none text-center"
          placeholder="받을 사람"
          onChange={(e) => setToName(e.target.value)}
          value={toName}
        ></input>
        님께 편지를 써주세요!
      </h3>
      <section className="mt-[50px]">
        <Letter
          value={content}
          onChange={handleInput}
          placeholderText={"편지를 작성해주세요!"}
        />
        <section className="flex justify-between">
          <span>{wordCount}/100</span>
          <span className="font-['TTLaundryGothicB'] text-[25px] mt-3">
            From. {userName}
          </span>
        </section>
      </section>
      <section className="mt-[60px]">
        <Button text="우체통에 넣기" onClick={handleSumbit} />
      </section>
    </div>
  );
}
