import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Letter() {
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
        <div className="relative w-[300px] h-[200px] border-[7px] border-[#FDE293] bg-[#FFFFFF] rounded-lg mt-[20px]">
          <Image
            className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 w-[70px] h-[70px]"
            src="/images/ribbon.png"
            alt="리본"
            width={70}
            height={70}
          />
        </div>
        <Link href="/">
          <button className="mt-[20px] w-[200px] h-[50px] font-['Hakyo'] bg-[#F9AB00] text-white text-[20px] rounded-lg shadow-md">
            편지 보내기
          </button>
        </Link>
      </div>
    </main>
  );
}
