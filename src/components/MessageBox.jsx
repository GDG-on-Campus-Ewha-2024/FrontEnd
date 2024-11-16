import Image from "next/image";

const MessageBox = ({ name, message }) => {
  return (
    <div className="relative w-[300px] h-[200px] border-[7px] border-[#FDE293] bg-[#FFFFFF] rounded-lg">
      <Image
        className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 w-[70px] h-[70px]"
        src="/images/ribbon.png"
        alt="리본"
        width={70}
        height={70}
      />
      <div className="mt-[30px] text-center">
        <h3 className="font-bold text-[20px]">From. {name}</h3>
        <p className="mt-[8px] text-[18px]">{message}</p>
      </div>
    </div>
  );
};

export default MessageBox;
