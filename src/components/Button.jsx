const Button = ({ text }) => {
  return (
    <div>
      <button className="w-[200px] h-[50px] border-[3px] border-strong font-['TTLaundryGothicB'] bg-blue-100 rounded-[15px] text-[20px]">
        {text}
      </button>
    </div>
  );
};

export default Button;
