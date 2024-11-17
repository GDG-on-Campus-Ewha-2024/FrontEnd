// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
import Image from "next/image";
import MessageBox from "../components/MessageBox";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Link from "next/link";

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
//import MessageBox from "@/components/MessageBox";

export default function Home() {
  const MOCK_MESSAGE_LIST = [
    { name: "양승혜", message: "안녕하세요" },
    { name: "양승혜", message: "안녕하세요" },
    { name: "양승혜", message: "안녕하세요" },
    { name: "양승혜", message: "안녕하세요" },
  ];

  return (
    <main className="bg-[#F9CA3F] w-full h-[100dvh]">
      <Header>
        <button className="bg-white flex gap-[5px] items-center py-[7px] px-[7px] rounded-lg ">
          <Image
            src="/images/image.png"
            alt="아이콘"
            width={35}
            height={35}
          ></Image>
          Google 로그인하고 쓰기
        </button>
      </Header>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-[80px] font-['Changwon'] text-white">
            연말 편지 우체통
          </h1>
          <h5 className="font-['Hakyo'] text-[25px]">
            💌 양승혜님의 연말 편지 우체통으로 00건의 편지가 도착했어요!
          </h5>
        </div>
        <Link href="/letter">
          <button className="mt-[20px] w-[400px] h-[50px] font-['Hakyo'] bg-[#F9AB00] text-white text-[20px] rounded-lg shadow-md">
            편지 쓰러 가기
          </button>
        </Link>

        <div className="grid grid-cols-4 gap-[30px] mt-[60px]">
          {MOCK_MESSAGE_LIST.map((letter, idx) => (
            <MessageBox key={idx} name={letter.name} message={letter.message} />
          ))}
        </div>
      </div>
    </main>
  );
}
