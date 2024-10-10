// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
import Image from "next/image"

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
import MessageBox from "@/components/MessageBox";



export default function Home() {
  return (
    <main>
      {/* <h1 className="font-size:55px; font-['Changwon']"> 💌 </h1>
      <h1 className="font-size:32px; font-['Changwon']">연말 편지 우체통 </h1>
      
      <h1 className="font-size:32px; font-['Changwon']">Google 로그인하고 쓰기 </h1> */}

      <h1 className="font-size:55px; font-['Changwon'] Header">
        <p>
          <span>💌</span>
          <span>연말 편지 우체통</span>
          <Image src="/images/image.png" alt="google icon" width={58} height={50}>
          </Image>
          <span>Google 로그인하고 쓰기</span>
        </p>

      </h1>
    </main>
  );
}
