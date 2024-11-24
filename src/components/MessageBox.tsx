import React from "react";

type MessageBoxProps = {
  user: string;
  content: string;
};

const colors: string[] = ["brick", "lightbrown"];

const MessageBox: React.FC<MessageBoxProps> = ({ user, content }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gird-rows-2 gap-10 pt-[50px]">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="items-center justify-self-center">
          <div
            className={`${
              colors[index % 2] === "brick" ? "bg-brick" : "bg-lightbrown"
            } rounded-xl h-[300px] w-[480px] drop-shadow-md`}
          >
            <h4 className="font-bold text-[20px] font-['moneygraphy'] p-3">
              From. {user}
            </h4>
            <p className="text-[15px] font-['moneygraphy']">{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageBox;



