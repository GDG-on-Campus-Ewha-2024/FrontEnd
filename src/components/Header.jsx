// Header component

import { ReactNode } from "react";

const Header = () => {
  return (
    <div className="flex items-center w-full h=[60px] bg-[#A60606] justify-between px-[30px]">
      <h2 className="font-['Changwon'] text-white">💌 연말 편지 우체통</h2>
      {children}
    </div>
  );
};

export default Header;
