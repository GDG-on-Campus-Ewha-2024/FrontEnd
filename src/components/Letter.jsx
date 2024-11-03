import { useState } from "react";

const Letter = () => {
  const [letter, setLetter] = useState("");
  const [count, setCount] = useState("0");

  return (
    <div className="flex flex-col">
      <div className="w-[500px] h-[500px] border-[3px] border-strong rounded-md bg-white flex">
        <textarea
          className="w-full h-full resize-none p-[20px] text-[20px] font-['GowunDodum']"
          maxLength={100}
          onChange={(e) => {
            setLetter(e.target.value);
            setCount(e.target.value.length);
          }}
        ></textarea>
      </div>
      <p>{count}/100</p>
    </div>
  );
};

export default Letter;
