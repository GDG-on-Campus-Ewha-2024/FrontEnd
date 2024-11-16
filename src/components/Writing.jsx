import React, {useState, useEffect} from 'react';

const Writing = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col w-[500px] h-[500x] bg-yellow-50 rounded-lg p-6 relative">
        {/* 닫기 버튼 */}
        <button
          className="text-black font-['moneygraphy'] absolute top-2 right-0 bg-red-500 rounded-full w-8 h-8 flex hover:text-brick text-[20px] font-bold"
          onClick={onClose}
        >
          X
        </button>

        {/* 편지 작성 폼 */}
        <form className="flex flex-col flex-grow gap-4">
            <textarea
            className="w-[300px] h-[50px] p-4 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="받는 사람의 이름을 입력해주세요"
          ></textarea>
         
          <textarea
            className="w-full h-[200px] p-4 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="편지 내용을 입력해주세요"
          ></textarea>
          <textarea
            className="w-[300px] h-[50px] p-4 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="작성자 별명을 적어주세요."
          ></textarea>
        </form>

        {/* 편지 등록 버튼 */}
        <button className="text-black bg-white w-[150px] h-[50px] drop-shadow-lg rounded-md self-center mt-4 hover:text-brick transition-colors">
          편지 등록하기
        </button>
      </div>
    </div>
  );
};

export default Writing;
