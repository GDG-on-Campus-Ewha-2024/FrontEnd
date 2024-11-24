interface LetterProps {
  value: string;
  onChange: (e: any) => void;
  placeholderText: string;
}

const Letter = ({ value, onChange, placeholderText }: LetterProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-[500px] h-[450px] border-[3px] border-strong rounded-md bg-white flex">
        <textarea
          className="w-full h-full resize-none p-[20px] text-[20px] font-['GowunDodum']"
          maxLength={100}
          value={value}
          onChange={onChange}
          placeholder={placeholderText}
        ></textarea>
      </div>
    </div>
  );
};

export default Letter;
