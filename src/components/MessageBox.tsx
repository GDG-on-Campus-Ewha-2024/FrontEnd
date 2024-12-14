// MessageBox component
import Image from "next/image";
import ribbon from "../../public/images/ribbon.png";

interface MessageBoxProps {
  user: string;
  content: string;
}

const MessageBox = ({ user, content }: MessageBoxProps) => {
  return (
    <div className="relative w-[300px] h-[200px] border-4 border-strong bg-white rounded-[25px]">
      <Image
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[30%] w-[70px] h-[70px]"
        src={ribbon}
        alt="jingle-bell"
      />
      <div className="p-5 pt-[50px]  ">
        <h3 className="font-semibold text-[20px] font-['TTLaundryGothicB']">
          From. {user}
        </h3>
        <p className="text-[17px] font-['GowunDodum']">{content}</p>
      </div>
    </div>
  );
};

export default MessageBox;
