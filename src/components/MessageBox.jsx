// MessageBox component

const MessageBox = ({ name, message }) => {
  return (
    <>
      <div className="w-[230px] h-[160px] bg-white rounded-lg border-4 border-blue-500 p-4">
        <span className="font-semibold font-['Hakyo']">From. {name}</span>
        <br />
        <span className="my-5 font-['Hakyo'] text-gray-600">{message}</span>
      </div>
    </>
  );
};

export default MessageBox;
