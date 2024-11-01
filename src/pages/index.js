// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
// import Image from "next/image"

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
//import MessageBox from "@/components/MessageBox";

import Header from '@/components/Header';
import MessageBox from '@/components/MessageBox';
import messagesData from '../components/Messages.json';

export default function Home() {
  return (
    // <main>
    //   {/* font 적용하는 법 예시 */}
    //   <h1 className="font-['Changwon']"></h1>
    // </main>

    <main className="bg-sky-50">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold font-['Changwon'] mt-9">
          연말 편지 우체통
        </h1>
        <h3 className="text-base font-bold font-['Hakyo'] mt-6 ">
          💌 김예린의 연말 편지 우체통으로 {messagesData.Messages.length}건의
          편지가 도착했어요!
        </h3>
        <button className="m-3 font-['Hakyo'] text-sm font-bold text-white w-[200px] h-[30px] rounded-sm bg-blue-500">
          편지 쓰러 가기
        </button>
      </div>
      <div className="flex justify-center mt-[15px]">
        <div className="w-[770px] flex flex-wrap gap-4 p-4 justify-end">
          {messagesData.Messages && messagesData.Messages.length > 0 ? (
            messagesData.Messages.map((content, index) => {
              console.log('Messages Data:', messagesData);

              console.log(content); // 메시지 로그 출력
              return (
                <MessageBox
                  key={index}
                  name={content.name}
                  message={content.message}
                />
              );
            })
          ) : (
            <p>편지가 없습니다.</p>
          )}
        </div>
      </div>
    </main>
  );
}
