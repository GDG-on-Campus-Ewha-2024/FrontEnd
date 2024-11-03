// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
// import Image from "next/image"

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
//import MessageBox from "@/components/MessageBox";

import Header from "../components/Header";
import Image from "next/image";
import GoogleIcon from "../images/image.png";
import MessageBox from "@/components/MessageBox";

export default function Home() {
  const MOCK_MESSAGE_LIST = [
    { name: "양승혜", message: "안녕하세요" },
    { name: "양승혜", message: "안녕하세요" },
  ];

  return (
    <main className="bg-[#FFDDE3] w-full h-[100vh]">
      <Header>
        <button className="bg-white flex gap-[5px] py-[5px] px-[7px] rounded-md">
          <Image src={GoogleIcon} alt="구글아이콘" width={30} height={30} />
          Google로 로그인하고 쓰기
        </button>
      </Header>
      <div className="flex flex-col items-center gap-[10px]">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-[50px] font-['Changwon']">연말 편지 우체통</h1>
          <h5 className="font-['Hakyo']">
            💌 양승혜님의 연말 편지 우체통으로 00건의 편지가 도착했어요!
          </h5>
        </div>
        <button className="w-[200px] h-[50px] font-['Hakyo'] border-[1px] bg-[#B61111] text-white rounded-lg shadow-lg">
          편지쓰러 가기
        </button>
        {MOCK_MESSAGE_LIST.map((el, idx) => (
          <MessageBox key={idx} name={el.name} message={el.message} />
        ))}
      </div>
    </main>
  );
}
