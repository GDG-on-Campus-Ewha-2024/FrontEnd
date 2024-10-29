import Button from "../components/Button.jsx";
import Letter from "../components/Letter.jsx";

export default function writeLetter() {
  return (
    <div className="bg-back h-screen w-screen flex items-center flex-col">
      <h3 className="mt-[80px] font-['TTLaundryGothicB'] text-[30px]">
        💌 용가리님께 편지를 써주세요!
      </h3>
      <section className="mt-[50px]">
        <Letter />
      </section>

      <section className="mt-[60px]">
        <Button text="우체통에 넣기" />
      </section>
    </div>
  );
}
