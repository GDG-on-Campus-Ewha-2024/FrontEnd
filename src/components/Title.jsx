import React, { useState } from 'react';
import Writing from './Writing';

const Title = () => {
    const [isPopupOpen, setIsPopupOpen]=useState(false);

    const handleOpenPopup=()=>{
        setIsPopupOpen(true);
    }

    const handleClosePopup=()=>{
        setIsPopupOpen(false);
    };

    return <div className="flex flex-row items-baseline place-content-between font-bold font-['moneygraphy']">
        <h2 className="text-red text-3xl ml-20">Total</h2>
        <div className="flex flex-row items-center gap-10 m-10">
        <h1 className="text-[60px] text-black underline underline-offset-8 decoration-red">시연</h1>
        <h2 className="text-[50px] text-black">님께 도착한 편지</h2>
        </div>
        <button className="bg-white text-red w-[130px] h-[50px] rounded-md hover:bg-[#a63a30] hover:text-white transition-colors text-xl text-center drop-shadow mr-20
        "onClick={handleOpenPopup}>
            편지 쓰기
        </button>
        {isPopupOpen && <Writing onClose={handleClosePopup}/>}
    </div>
  };
  
  export default Title;
  