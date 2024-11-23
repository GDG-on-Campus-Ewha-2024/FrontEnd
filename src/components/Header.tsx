// Header component
import Google from '../../public/images/image.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-blue-300 flex flex-row justify-between px-10 py-5 w-[100%] h-[60px]">
      <div className="text-white font-['Changwon']  font-semibold text-[18px]">
        💌 연말 편지 우체통
      </div>
      <button className="items-center text-sm font-bold flex flex-row bg-white rounded-md p-3 gap-2">
        <Image src={Google} alt="Google Logo" className="w-5 h-5" />
        Google로 로그인하고 쓰기
      </button>
    </div>
  );
};

export default Header;
