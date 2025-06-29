import React, { useEffect } from 'react'
import error from '../assets/warning.png'
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
  const navigate = useNavigate();
    useEffect(() => {
    document.body.classList.add("no-page-body");
    
  return () => {
    document.body.classList.remove("no-page-body");
  };
},
  []);

    
    const goBackHome = () => {
     navigate("/")
};
  return (
    <>
    <div className="flex flex-col items-center justify-center pl-[60px] pt-[2px] md:pl-[350px] md:pt-[140px] gap-y-[15px]">
          <img src={error} alt="" className='md:absolute md:ml-[60px] md:mt-[60px] md:left-1 md:top-1/7 max-w-[450px] md:max-w-[500px] w-auto h-[500px] rounded-full'/>
          <div className='flex flex-col items-center justify-center'>
        <p className='font-Roboto text-[48px] md:text-[70px] text-white text-center '>PAGE NOT FOUND</p>
        <p className='font-Roboto text-[19px] md:text-[28px] text-center w-[300px] md:w-[491px]'>We couldn't find the page you were looking for.</p>
        </div>

   <button
            className="cursor-pointer max-w-[266px] h-[48px] bg-[rgb(255,215,0)] hover:bg-[rgb(36,160,181)] hover:text-[white] rounded-[25px] text-[18px] text-black font-Roboto"
            onClick={goBackHome}
            type="button"
        >
            Back To Home
            </button>
    </div> 

   
    
    </>
  )
}

export default NoPage