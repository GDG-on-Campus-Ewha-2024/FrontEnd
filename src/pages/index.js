// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
// import Image from "next/image"

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
//import MessageBox from "@/components/MessageBox";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-[50px] font-['Changwon']">연말 편지 우체통</h1>
          <h5 className="font-['Hakyo']">
            양승혜님의 연말 편지 우체통으로 00건의 편지가 도착했어요!
          </h5>
        </div>
        <button className="w-[200px] h-[50px] font-['Changwon'] border-[1px] bg-[#B61111] text-white rounded-lg shadow-lg">
          편지쓰러 가기
        </button>
      </div>
    </div>
  );
}
