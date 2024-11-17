// Header component
import { ReactNode } from "react";

const Header = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-[30px] w-full h-[60px] bg-[#FDE293]">
      <h1 className="font-['Changwon'] text-[20px]">💌 연말 편지 우체통</h1>
      {children}
    </div>
  );
};

export default Header;
