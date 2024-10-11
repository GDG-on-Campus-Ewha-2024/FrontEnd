// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
// import Image from "next/image"

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
//import MessageBox from "@/components/MessageBox";

import Header from '@/components/Header';
import MessageBox from '@/components/MessageBox';

export default function Home() {
  return (
    // <main>
    //   {/* font 적용하는 법 예시 */}
    //   <h1 className="font-['Changwon']"></h1>
    // </main>

    <main>
      <h1>연말 편지 우체통</h1>
      <h3>💌 김예린의 연말 편지 우체통으로 00건의 편지가 도착했어요!</h3>
      <button>편지 쓰러 가기</button>
      <div>
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
      </div>
    </main>
  );
}
