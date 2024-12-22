// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
 import Image from "next/image"

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
import MessageBox from "@/components/MessageBox";
import Title from "@/components/Title";

export default function Home() {
  async function getMessageData(){
    try{
      const response=await instance.get('/messages?name=${userName}');
      if(response.status===200){
        const fetchedMsg=response.data;
        setMessages(fetchedMsg);
        console.log("편지데이터를 가져옴")
      }
    }catch(error){
      console.error("편지데이터 가져오기 실패.")
    }
  }
  return (
    <div className='bg-background'>
      <Title/>
    <main>
        <MessageBox/>
    </main>
    </div>
  );
}
