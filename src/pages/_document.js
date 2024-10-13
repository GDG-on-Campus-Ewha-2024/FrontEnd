import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Image from "next/image";
import GoogleIcon from "../public/images/image.png";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Header>
          <button className="bg-white flex gap-[5px] py-[5px] px-[7px] rounded-md">
            <Image src={GoogleIcon} alt="구글아이콘" width={30} height={30} />
            Google로 로그인하고 쓰기
          </button>
        </Header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
