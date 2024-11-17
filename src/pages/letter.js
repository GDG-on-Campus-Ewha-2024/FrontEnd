import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Letter() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
      <div className="flex flex-col items-center gap-[20px]">
        <h1 className="text-[80px] font-['Changwon'] text-white">
          연말 편지 우체통
        </h1>
        <h5 className="font-['Hakyo'] text-[25px]">💌 양승혜님</h5>
        <form className="relative w-[500px] h-[300px] border-[7px] border-[#FDE293] bg-[#FFFFFF] rounded-lg mt-[20px]">
          <Image
            className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 w-[70px] h-[70px]"
            src="/images/ribbon.png"
            alt="리본"
            width={70}
            height={70}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
            className="w-full h-[40px] border-[2px] border-[#FDE293] rounded-lg px-[10px] "
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지를 입력하세요"
            className="w-full h-[250px] border-[2px] border-[#FDE293] rounded-lg px-[10px] py-[5px]"
          />
        </form>
        <Link href="/">
          <button className="mt-[20px] w-[200px] h-[50px] font-['Hakyo'] bg-[#F9AB00] text-white text-[20px] rounded-lg shadow-md">
            편지 보내기
          </button>
        </Link>
      </div>
    </main>
  );
}
