interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        className="w-[200px] h-[50px] border-[2px] border-[#c44f6f] font-['TTLaundryGothicB'] bg-[#ffe3ed] rounded-[15px] text-[20px]"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
