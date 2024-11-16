// Header component
import google from "../../public/images/image.png";
import Image from "next/image";

const Header = () => {

  return <div className="flex flex-col content-center">
    <div className="flex place-content-between items-center bg-red h-[113px]">
      <p className="flex font-bold text-white font-['moneygraphy'] text-[50px]">💝연말편지우체통</p>
      <button className="flex items-center font-bold text-black text-[25px] bg-white p-2 rounded-2xl font-['moneygraphy'] m-5 ">
      <Image src={google} alt="googlem" className="w-7 h-6"/>구글 로그인하고 편지쓰기</button>
    </div>
    <div
        className="h-[30px] bg-repeat-x bg-[length:100px_30px] bg-[url('/images/oval.png')] bg-background"
      ></div>
</div>;
};

export default Header;


