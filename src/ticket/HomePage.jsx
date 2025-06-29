import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add("homepage-body");

    return () => {
      document.body.classList.remove("homepage-body");
    };
  }, []);

  const registerButton = () => {
    navigate("/ticket");
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center gap-y-[8px] md:gap-y-[2px] pt-[130px] md:pt-[40px] px-4 md:pl-[230px]">
       <h1 className="font-monoton text-[50px] w-full max-w-[370px] md:w-full md:text-[62px] text-[rgb(250,250,250)] text-center leading-[140%]">
          TECHEMBER FEST{" "}
          <span className="font-orbitron text-[50px]text-center md:text-[62px]">
            ”25
          </span>
        </h1>
        
        <p className="font-Road text-[34px] md:text-[46px] text-[rgb(250,250,250)] text-center leading-[100%]">
          Code! Create!! Conquer!!!
        </p>
        
        <p className="font-Road text-[28px] md:text-[40px] text-[rgb(250,250,250)] text-center leading-[150%]">
          Join us for an unforgettable experience!
        </p>
        
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[8px] pt-[20px] px-4 md:pl-[250px]">
        <p className="font-mochi text-[20px] md:text-[24px] text-[rgb(250,250,250)] text-center">
          Grab Your Tickets Here
        </p>

        <button
          className="cursor-pointer w-full max-w-[100px] md:max-w-[200px] min-h-[44px] md:min-h-[48px] border border-[rgb(36,160,181)] hover:bg-[rgb(1,29,34)] hover:text-white rounded-[8px] text-[16px] md:text-[18px] text-[rgb(36,160,181)]"
          onClick={registerButton}
          type="button"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
};

export default HomePage;
