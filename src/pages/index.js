// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
 import Image from "next/image"

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
import MessageBox from "@/components/MessageBox";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className='bg-background'>
      <Title/>
    <main>
        <MessageBox/>
    </main>
    </div>
  );
}
