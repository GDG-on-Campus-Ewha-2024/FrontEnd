import React from "react";

const colors = ["brick", "lightbrown"];

const MessageBox = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gird-rows-2 gap-10 pt-[50px] ">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index} className="items-center justify-self-center">
         <div className={`${
            colors[index % 2] === "brick" ? "bg-brick" : "bg-lightbrown"
          } rounded-xl h-[300px] w-[480px] drop-shadow-md `}
        ></div>
        </div>
      ))}
    </div>
  );
};

export default MessageBox;


