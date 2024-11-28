interface MessageBoxProps{
  message: string;
  fromName: string
}

const MessageBox = ({ message, fromName }:MessageBoxProps) => {
  return (
    <div className="w-[230px] h-[160px] bg-white rounded-lg border-4 border-blue-500 p-4">
      <span className="font-semibold font-['Hakyo']">From. {fromName}</span>
      <br />
      <span className="my-5 font-['Hakyo'] text-gray-600">{message}</span>
    </div>
  );
};

export default MessageBox;
